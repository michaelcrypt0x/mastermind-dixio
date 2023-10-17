import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
} from 'typeorm';

@Entity({ name: 'game' })
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', default: 0 })
  gameId: string;

  @Column({ type: 'smallint', default: 0 })
  feedbackId: number;
  
  @Column({ type: 'text' })
  secret: string;

  @Column({ type: 'text' })
  userAttempt: string;

  @Column({ type: 'text' })
  state: string;

  @Column({ type: 'smallint', default: 0 })
  black: number;

  @Column({ type: 'smallint', default: 0 })
  white: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;
}
