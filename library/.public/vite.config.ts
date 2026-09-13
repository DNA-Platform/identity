import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// DECORATORS REACH THE BROWSER THROUGH BABEL, NOT THROUGH tsconfig.
// @vitejs/plugin-react runs Babel, which ignores `experimentalDecorators`, so a
// `@look` or `@reactive` written here fails to parse in dev without this plugin.
const decorators = () => react({
    babel: { plugins: [['@babel/plugin-proposal-decorators', { version: 'legacy' }]] },
});

export default defineConfig({
    plugins: [decorators()],
    root: __dirname,
    server: { port: 5300, strictPort: true },
    preview: { port: 5300, strictPort: true },
    // ONE COPY OF EACH. @dna-platform/public declares react, react-dom and
    // styled-components as peers; two copies of styled-components is two theme
    // contexts and a book that renders unthemed.
    resolve: { dedupe: ['react', 'react-dom', 'styled-components'] },
    // A BOND CONSTRUCTOR IS FOUND BY ITS CLASS'S NAME — $Book declares a method
    // called $Book — so a minifier that renames the class makes it unreachable
    // and every chemical comes back undefined with nothing thrown.
    esbuild: {
        keepNames: true,
        tsconfigRaw: { compilerOptions: { experimentalDecorators: true, useDefineForClassFields: false } },
    },
    build: { outDir: 'dist', emptyOutDir: true },
});
