import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/input.js',
        output: [
            { file: './bundle.js', format: 'cjs' },
        ],
        plugins: [
            resolve(),
            commonjs()
        ]
    }
];