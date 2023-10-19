"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateState = exports.getHints = exports.generateSecret = exports.initState = exports.PEGS_PER_ROW = exports.MAX_ATTEMPT = exports.INIT_HINT_BLACK = exports.INIT_HINT_WHITE = exports.INIT_WHITE = exports.INIT_BLACK = exports.WIN_BLACK = void 0;
const crypto_1 = require("crypto");
const colors = [
    'yellow',
    'orange',
    'red',
    'green',
    'blue',
    'purple',
];
exports.WIN_BLACK = '1111';
exports.INIT_BLACK = '0000';
exports.INIT_WHITE = '0000';
exports.INIT_HINT_WHITE = '';
exports.INIT_HINT_BLACK = '';
exports.MAX_ATTEMPT = 10;
exports.PEGS_PER_ROW = 4;
let state;
const initState = () => {
    state = {
        gameId: (0, crypto_1.randomUUID)(),
        status: 'playing',
        currentAttempt: 0,
        maxAttempt: exports.MAX_ATTEMPT,
        hints: { black: exports.INIT_HINT_BLACK, white: exports.INIT_HINT_WHITE },
    };
    return state;
};
exports.initState = initState;
const generateSecret = () => {
    const max = colors.length;
    const secret = [];
    for (let i = 0; i < exports.PEGS_PER_ROW; i += 1) {
        const randomIndex = Math.floor(Math.random() * max);
        secret[i] = colors[randomIndex];
    }
    return secret;
};
exports.generateSecret = generateSecret;
const blackPeg = (userCombination, secretCombination, hints) => {
    for (let i = 0; i < exports.PEGS_PER_ROW; i += 1) {
        if (userCombination[i] === secretCombination[i]) {
            hints.black += '1';
        }
        else {
            hints.black += '0';
        }
    }
};
const whitePeg = (userCombination, secretCombination, hints) => {
    for (let userI = 0; userI < exports.PEGS_PER_ROW; userI += 1) {
        let founded = false;
        for (let secretX = 0; secretX < exports.PEGS_PER_ROW; secretX += 1) {
            if (userCombination[userI] === secretCombination[secretX]) {
                founded = false;
            }
            else {
                founded = true;
            }
        }
        founded ? (hints.white += '1') : (hints.white += '0');
    }
};
const getHints = (combination, secret) => {
    const secretCombination = [...secret];
    const userCombination = [...combination];
    const hints = { black: '', white: '' };
    blackPeg(userCombination, secretCombination, hints);
    whitePeg(userCombination, secretCombination, hints);
    return hints;
};
exports.getHints = getHints;
const updateState = (userAttempt, state, secret) => {
    const hints = (0, exports.getHints)(userAttempt, secret);
    state.hints = hints;
    if (state.hints.black === exports.WIN_BLACK) {
        state.status = 'win';
    }
    else {
        if (state.currentAttempt <= state.maxAttempt) {
            state.status = 'playing';
        }
        else {
            state.status = 'lose';
        }
        state.currentAttempt += 1;
    }
    return state;
};
exports.updateState = updateState;
//# sourceMappingURL=game.js.map