"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSwaggerDocumentation = void 0;
const swagger_1 = require("@nestjs/swagger");
const initSwaggerDocumentation = (app) => {
    app.use(['/api/doc/swagger', '/api/doc/swagger-json']);
    const swaggerDoc = new swagger_1.DocumentBuilder()
        .setTitle('MasterMind-dixio API')
        .setDescription('API for MasterMind-dixio admin app')
        .setVersion('V1.0')
        .setExternalDoc('download open-api json', '/api/doc/swagger-json')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerDoc);
    swagger_1.SwaggerModule.setup('api/doc/swagger', app, document, {
        swaggerOptions: { defaultModelsExpandDepth: 0 },
    });
};
exports.initSwaggerDocumentation = initSwaggerDocumentation;
//# sourceMappingURL=doc.swagger.js.map