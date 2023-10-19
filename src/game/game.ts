//6 colors
import { randomUUID } from 'crypto';
export type ColorType =
  | 'yellow'
  | 'orange'
  | 'red'
  | 'green'
  | 'blue'
  | 'purple';
export type GameStatus = 'playing' | 'win' | 'lose';

const colors: Array<ColorType> = [
  'yellow',
  'orange',
  'red',
  'green',
  'blue',
  'purple',
];
export interface Hints {
  black: string;
  white: string;
}

const WIN_BLACK='1111';
export interface State {
  gameId: string;
  status: GameStatus;
  currentAttempt: number;
  maxAttempt: number;
  hints: Hints;
}

let state;
export const initState = (): State => {
  state = {
    gameId: randomUUID(),
    status: 'playing',
    currentAttempt: 0,
    maxAttempt: 10,
    hints: { black: '0000', white: '0000' },
  };

  return state;
};

// Stateless PRIVATE functions used by the game:
export const generateSecret = (): Array<ColorType> => {
  const max = colors.length;
  const secret = [];
  for (let i = 0; i < PEGS_PER_ROW; i += 1) {
    const randomIndex = Math.floor(Math.random() * max);
    secret[i] = colors[randomIndex];
  }
  return secret;
  //return s.reverse();
};

const PEGS_PER_ROW = 4;
// generate the secret key passing the level's colors
const secret = generateSecret();
// update the game state

/* check for pegs on correct position (black pegs)*/
const blackPeg = (userCombination, secretCombination, hints: Hints) => {
  for (let i = 0; i < PEGS_PER_ROW; i += 1) {
    // if it's the same type (and same position cause they have the same index)
    if (userCombination[i] === secretCombination[i]) {
      // mark as checked
      // increment black pegs
      hints.black += '1';
    } else {
      hints.black += '0';
    }
  }
};

const whitePeg = (userCombination, secretCombination, hints: Hints) => {
  for (let userI = 0; userI < PEGS_PER_ROW; userI += 1) {
    let founded = false;
    for (let secretX = 0; secretX < PEGS_PER_ROW; secretX += 1) {
      if (userCombination[userI] === secretCombination[secretX]) {
        founded = false;
      } else {
        founded = true;
      }
    }
    founded ? (hints.white += '1') : (hints.white += '0');
  }
};
export const getHints = (combination, secret): Hints => {
  // create a local copy of both combinations
  const secretCombination = [...secret];
  const userCombination = [...combination];
  // initialize hints counters
  const hints = { black: '', white: '' } as Hints;
  blackPeg(userCombination, secretCombination, hints);
  whitePeg(userCombination, secretCombination, hints);

  // check for colors in wrong positions (white pegs)
  return hints;
};

export const updateState = (userAttempt: Array<ColorType>,state:State): State => {
  const hints = getHints(userAttempt, secret);

  if (state.hints.black === WIN_BLACK ) {
    state.status = 'win';
  } else {
    if (state.currentAttempt <= state.maxAttempt) {
      state.status = 'playing';
      state.currentAttempt += 1;
    } else {
      state.status = 'lose';
    }
  }

  return state;
};
