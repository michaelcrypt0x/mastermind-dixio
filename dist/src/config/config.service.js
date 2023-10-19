"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
typeorm_1.TypeOrmModule.forRootAsync({
    useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'ymJtwy6LigGCFpq',
        database: 'dixio-db',
        synchronize: true,
    }),
    dataSourceFactory: async (options) => {
        const dataSource = await new typeorm_2.DataSource(options).initialize();
        return dataSource;
    },
});
//# sourceMappingURL=config.service.js.map