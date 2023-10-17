"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    clearMocks: true,
    coverageProvider: "v8",
    moduleDirectories: [
        "node_modules"
    ],
    roots: [
        "<rootDir>",
    ],
    setupFiles: ['<rootDir>/test/jest.setup.ts'],
    testEnvironment: "node",
    timers: "real",
    testTimeout: 180000,
    verbose: true,
};
//# sourceMappingURL=jest.config.js.map