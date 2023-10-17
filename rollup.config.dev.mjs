import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete'

export default {

    //  Our game entry point (edit as required)
    input: [
        './src/game.ts'
    ],

    //  Where the build file is to be generated.
    //  Most games being built for distribution can use iife as the module type.
    //  You can also use 'umd' if you need to ingest your game into another system.
    //  If using Phaser 3.21 or **below**, add: `intro: 'var global = window;'` to the output object.
    output: {
        file: './dist/game.js',
        name: 'MyGame',
        format: 'iife',
        sourcemap: true
    },

    plugins: [
        del({ targets: 'dist/*' }),
        copy({
            targets: [
              { src: 'pages/index.html', dest: 'dist/' },
              { src: ['assets/live/*'], dest: 'dist/assets' },
            ]
          }),

        //  Parse our .ts source files
        nodeResolve({
            extensions: [ '.ts', '.tsx' ]
        }),

        //  We need to convert the Phaser 3 CJS modules into a format Rollup can use:
        commonjs({
            include: [
                'node_modules/eventemitter3/**',
                'node_modules/phaser/**'
            ],
            exclude: [ 
                'node_modules/phaser/src/polyfills/requestAnimationFrame.js',
            ],
            sourceMap: true,
            ignoreGlobal: true
        }),

        //  See https://github.com/rollup/plugins/tree/master/packages/typescript for config options
        typescript(),

        //  See https://www.npmjs.com/package/rollup-plugin-serve for config options
        serve({
            open: true,
            contentBase: ['dist','dist/assets/house'],
            host: 'localhost',
            port: 10001,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })

    ]
};