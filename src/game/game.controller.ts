import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

import { ApiOperation } from '@nestjs/swagger';
import { GameService } from './game.service';
import { Game } from './game.entity';
import {
  updateState,
  generateSecret,
  initState,
  ColorType,
  State,
  GameStatus,
  MAX_ATTEMPT,
  INIT_WHITE,
  INIT_BLACK,
} from './game';
import { CreateGameDto, UpdateGameDto } from './dto/game.dto';

@Controller()
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('games')
  @ApiOperation({
    summary:
      'method will be used to retrieve all games (identified by their id) and the number of tries and the latest feedback',
  })
  getAllGames(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get('game/:gameId')
  @ApiOperation({
    summary:
      'method will be used to retrieve the history of proposals for a given game and their feedbacks.',
  })
  getOneGame(@Param('gameId') gameId: string) {
    return this.gameService.findOne(gameId);
  }

  // eslint-disable-next-line prettier/prettier
@Post('init')
  @ApiOperation({
    summary:
      'method will be used to initiate a new game with a random code of four colors among six.',
  })
  async initGame() {
    console.log('initGame');
    const secret = generateSecret();
    const state = initState();
    const createGameDto = {} as CreateGameDto;
    createGameDto.gameId = state.gameId;
    createGameDto.state = state.status;
    createGameDto.feedbackId = state.currentAttempt;
    createGameDto.white = INIT_WHITE;
    createGameDto.black = INIT_BLACK;
    createGameDto.secret = secret.toString();
    createGameDto.userAttempt = '';
    console.log('createDto = ' + JSON.stringify(createGameDto));
    const game = await this.gameService.createOne(createGameDto);
    console.log('gameid = ' + game.id);
    return game.gameId;
  }

  @Put('game/:gameId')
  @ApiOperation({
    summary: 'method will be used to propose a solution for a given game.',
  })
  async updateGame(
    @Param('gameId') gameId: string,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    const userColors = updateGameDto.userAttempt.split(',') as Array<ColorType>;
    const secretGame = updateGameDto.secret.split(',') as Array<ColorType>;
    const state = {} as State;
    state.gameId = updateGameDto.gameId;
    state.currentAttempt = updateGameDto.feedbackId;
    state.hints = { black: updateGameDto.black, white: updateGameDto.white };
    state.status = updateGameDto.state as GameStatus;
    state.maxAttempt = MAX_ATTEMPT;
    updateState(userColors, state, secretGame);
    updateGameDto.feedbackId = state.currentAttempt;
    updateGameDto.state = state.status;
    updateGameDto.white = state.hints.white;
    updateGameDto.black = state.hints.black;
    this.gameService.updateOne(updateGameDto);
    return updateGameDto;
  }
}
