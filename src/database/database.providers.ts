import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'ymJtwy6LigGCFpq',
        database: 'dixio-db',
        schema: 'public',
       // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
