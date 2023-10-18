import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

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
    synchronize: true,
  }),
  // dataSource receives the configured DataSourceOptions
  // and returns a Promise<DataSource>.
  dataSourceFactory: async (options) => {
    const dataSource = await new DataSource(options).initialize();
    return dataSource;
  },
});
