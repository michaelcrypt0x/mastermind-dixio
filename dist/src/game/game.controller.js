"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const game_service_1 = require("./game.service");
const game_1 = require("./game");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    getAllGames() {
        return this.gameService.findAll();
    }
    getOneGame(gameId) {
        return this.gameService.findOne(gameId);
    }
    async initGame() {
        console.log('initGame');
        const secret = (0, game_1.generateSecret)();
        const state = (0, game_1.initState)();
        const createGameDto = {};
        createGameDto.gameId = state.gameId;
        createGameDto.state = state.status;
        createGameDto.feedbackId = state.currentAttempt;
        createGameDto.white = game_1.INIT_WHITE;
        createGameDto.black = game_1.INIT_BLACK;
        createGameDto.secret = secret.toString();
        createGameDto.userAttempt = '';
        console.log('createDto = ' + JSON.stringify(createGameDto));
        const game = await this.gameService.createOne(createGameDto);
        console.log('gameid = ' + game.id);
        return game.gameId;
    }
    async updateGame(gameId, updateGameDto) {
        const userColors = updateGameDto.userAttempt.split(',');
        const secretGame = updateGameDto.secret.split(',');
        const state = {};
        state.gameId = updateGameDto.gameId;
        state.currentAttempt = updateGameDto.feedbackId;
        state.hints = { black: updateGameDto.black, white: updateGameDto.white };
        state.status = updateGameDto.state;
        state.maxAttempt = game_1.MAX_ATTEMPT;
        (0, game_1.updateState)(userColors, state, secretGame);
        updateGameDto.feedbackId = state.currentAttempt;
        updateGameDto.state = state.status;
        updateGameDto.white = state.hints.white;
        updateGameDto.black = state.hints.black;
        this.gameService.updateOne(updateGameDto);
        return updateGameDto;
    }
};
exports.GameController = GameController;
__decorate([
    (0, common_1.Get)('games'),
    (0, swagger_1.ApiOperation)({
        summary: 'method will be used to retrieve all games (identified by their id) and the number of tries and the latest feedback',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getAllGames", null);
__decorate([
    (0, common_1.Get)('game/:gameId'),
    (0, swagger_1.ApiOperation)({
        summary: 'method will be used to retrieve the history of proposals for a given game and their feedbacks.',
    }),
    __param(0, (0, common_1.Param)('gameId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "getOneGame", null);
__decorate([
    (0, common_1.Post)('init'),
    (0, swagger_1.ApiOperation)({
        summary: 'method will be used to initiate a new game with a random code of four colors among six.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameController.prototype, "initGame", null);
__decorate([
    (0, common_1.Put)('game/:gameId'),
    (0, swagger_1.ApiOperation)({
        summary: 'method will be used to propose a solution for a given game.',
    }),
    __param(0, (0, common_1.Param)('gameId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "updateGame", null);
exports.GameController = GameController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameController);
//# sourceMappingURL=game.controller.js.map