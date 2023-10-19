import { DataSource } from 'typeorm';
import { Game } from './game.entity';
export declare const gameProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Game>;
    inject: string[];
}[];
