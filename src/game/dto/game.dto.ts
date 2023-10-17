export interface CreateGameDto {
  gameId: number;
  feedbackId: number;
  secret: string;
  userAttempt: string;
  status: string;
  black: number;
  white: number;
}

export interface UpdateGameDto {
  gameId: number;
  feedbackId: number;
  secret: string;
  userAttempt: string;
  status: string;
  black: number;
  white: number;
}
