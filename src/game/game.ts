//6 colors
import { randomUUID } from 'crypto';
type ColorType = 'yellow' | 'orange' | 'red' | 'green' | 'blue' | 'purple';
type GameStatus = 'playing' | 'win' | 'lose';

const colors: Array<ColorType> = [
  'yellow',
  'orange',
  'red',
  'green',
  'blue',
  'purple',
];
interface Hints {
  black: number;
  white: number;
}

interface State {
  gameId: string ;
  status: GameStatus;
  currentAttempt: number;
  maxAttempt: number;
}

let state;
export const initState = (): State => {
  state = {
    gameId: randomUUID(),
    status: 'playing',
    currentAttempt: 0,
    maxAttempt: 10,
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
      secretCombination[i] = userCombination[i] = null;
      // increment black pegs
      hints.black += 1;
    }
  }
};

const whitePeg = (userCombination, secretCombination, hints: Hints) => {
  for (let i = 0; i < PEGS_PER_ROW; i += 1) {
    for (let x = 0; x < PEGS_PER_ROW; x += 1) {
      // if not already checked
      if (userCombination[i] && secretCombination[x]) {
        // if it's the same type (but different positions cause the index doesn't match)
        if (userCombination[i] === secretCombination[x]) {
          // mark as checked
          secretCombination[x] = userCombination[i] = null;
          // increment white pegs
          hints.white += 1;
        }
      }
    }
  }
};
export const getHints = (combination, secret): Hints => {
  // create a local copy of both combinations
  const secretCombination = [...secret];
  const userCombination = [...combination];
  // initialize hints counters
  const hints = { black: 0, white: 0 } as Hints;
  blackPeg(userCombination, secretCombination, hints);
  whitePeg(userCombination, secretCombination, hints);

  // check for colors in wrong positions (white pegs)
  return hints;
};

export const checkCombination = (combination) => {
  const hints: Hints = getHints(combination, secret);
  if (hints.black === PEGS_PER_ROW) {
    state.status = 'win';
  } else {
    if (state.currentAttempt <= state.maxAttempt) {
      state.status = 'playing';
      state.currentAttempt += 1;
    } else {
      state.status = 'lose';
    }
  }
  return { ...state, hints, secret: state.status === 'lose' && secret };
};
