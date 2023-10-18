import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

import { ApiOperation } from '@nestjs/swagger';
import { GameService } from './game.service';
import { Game } from './game.entity';
import { generateSecret, initState } from './game';
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
    createGameDto.white = 0;
    createGameDto.black = 0;
    createGameDto.secret = secret.toString();
    createGameDto.userAttempt='';
    console.log('createDto = ' + JSON.stringify(createGameDto));
    const game = await this.gameService.createOne(createGameDto);
    console.log('gameid = ' + game.id);
    return game.gameId;
  }
}
/*@Put(':id')
@ApiOperation({ summary: 'method will be used to propose a solution for a given game.' })
async updateGame(@Param('id') id: number, @Body() updateGameDto: UpdateGameDto) {
  

  return this.usersService.update(+id, updateUserDto);
}*/
