import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    plugins: [typescript()],
    output: [{
        banner: '',
        format: 'umd',
        name: 'CountDown',
        file: 'lib/index.umd.js'
    }, {
        format: 'system',
        file: 'lib/index.system.js'
    }, {
        format: 'es',
        file: 'lib/index.esm.js'
    }]
}
