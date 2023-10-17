export interface CreateGameDto {
  gameId: string;
  feedbackId: number;
  secret: string;
  userAttempt: string;
  status: string;
  black: number;
  white: number;
}

export interface UpdateGameDto {
  gameId: string ;
  feedbackId: number;
  secret: string;
  userAttempt: string;
  status: string;
  black: number;
  white: number;
}
