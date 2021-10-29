import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',

    plugins: [typescript()],
    output: [{
        banner: '',
        format: 'umd',
        name: 'OasisCountdown',
        file: 'lib/countdown.umd.js'
    }, {
        format: 'system',
        file: 'lib/countdown.system.js'
    }, {
        format: 'es',
        file: 'lib/countdown.esm.js'
    }]
}
