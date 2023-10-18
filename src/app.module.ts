import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // Use useFactory, useClass, or useExisting
      // to configure the DataSourceOptions.
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'ymJtwy6LigGCFpq',
        database: 'dixio-db',
       // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: ['dist/**/*.entity.js'],
        autoLoadEntities: true,
        synchronize: true,
        logging :'all',
        schema :'public'
        
      }),
      // dataSource receives the configured DataSourceOptions
      // and returns a Promise<DataSource>.
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    GameModule,
  ],
})
export class AppModule {}
