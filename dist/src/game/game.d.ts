export type ColorType = 'yellow' | 'orange' | 'red' | 'green' | 'blue' | 'purple';
export type GameStatus = 'playing' | 'win' | 'lose';
export interface Hints {
    black: string;
    white: string;
}
export declare const WIN_BLACK = "1111";
export declare const INIT_BLACK = "0000";
export declare const INIT_WHITE = "0000";
export declare const INIT_HINT_WHITE = "";
export declare const INIT_HINT_BLACK = "";
export declare const MAX_ATTEMPT = 10;
export declare const PEGS_PER_ROW = 4;
export interface State {
    gameId: string;
    status: GameStatus;
    currentAttempt: number;
    maxAttempt: number;
    hints: Hints;
}
export declare const initState: () => State;
export declare const generateSecret: () => Array<ColorType>;
export declare const getHints: (combination: any, secret: any) => Hints;
export declare const updateState: (userAttempt: Array<ColorType>, state: State, secret: any) => State;
