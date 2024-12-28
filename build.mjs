import * as esbuild from 'esbuild'
/** @typedef {import('esbuild').BuildOptions} BuildOptions **/

const WATCH = process.argv[2] === 'watch';

/** @type BuildOptions */
const common = {
    sourcemap: WATCH,
    minify: !WATCH,
    bundle: true,
    format: 'cjs',
    external: ['vscode'],
    plugins: [{
        name: 'rebuild-notify',
        setup(build) {
            build.onEnd(results => {
                if (results.errors.length === 0) {
                    console.log(`wrote ${build.initialOptions.outfile}`);
                }
            })
        }
    }]
};

/** @type BuildOptions[] */
const configs = [
    {
        ...common,
        entryPoints: [
            'src/browser/extension.ts'
        ],
        platform: 'browser',
        outfile: 'dist/browser.js'
    },
    {
        ...common,
        entryPoints: [
            'src/main/extension.ts'
        ],
        platform: 'node',
        outfile: 'dist/main.js'
    }
];

for (const config of configs) {
    if (WATCH) {
        const ctx = await esbuild.context(config);
        await ctx.watch();
    } else {
        await esbuild.build(config);
    }
}

if (WATCH) {
    console.log('watching...');
}
