import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B2Ejcf7k.mjs';
import { manifest } from './manifest_Bor9VOQN.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/check-password.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/now.astro.mjs');
const _page6 = () => import('./pages/portfolio/art.astro.mjs');
const _page7 = () => import('./pages/portfolio/dev.astro.mjs');
const _page8 = () => import('./pages/portfolio/writing.astro.mjs');
const _page9 = () => import('./pages/portfolio.astro.mjs');
const _page10 = () => import('./pages/resume.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/check-password.ts", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/now.astro", _page5],
    ["src/pages/portfolio/art.astro", _page6],
    ["src/pages/portfolio/dev.astro", _page7],
    ["src/pages/portfolio/writing.astro", _page8],
    ["src/pages/portfolio/index.astro", _page9],
    ["src/pages/resume.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3786dd91-4db9-425d-a964-bb1d5824c045",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
