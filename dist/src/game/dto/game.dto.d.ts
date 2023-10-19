export interface CreateGameDto {
    gameId: string;
    feedbackId: number;
    secret: string;
    userAttempt: string;
    state: string;
    black: string;
    white: string;
}
export interface UpdateGameDto {
    gameId: string;
    feedbackId: number;
    secret: string;
    userAttempt: string;
    state: string;
    black: string;
    white: string;
}
