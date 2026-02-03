import 'piccolore';
import { k as decodeKey } from './chunks/astro/server_Vyl08XzC.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DT4Y9Myt.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/lilyluo/dev/personal-site/","cacheDir":"file:///Users/lilyluo/dev/personal-site/node_modules/.astro/","outDir":"file:///Users/lilyluo/dev/personal-site/dist/","srcDir":"file:///Users/lilyluo/dev/personal-site/src/","publicDir":"file:///Users/lilyluo/dev/personal-site/public/","buildClientDir":"file:///Users/lilyluo/dev/personal-site/dist/client/","buildServerDir":"file:///Users/lilyluo/dev/personal-site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"now/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/now","isIndex":false,"type":"page","pattern":"^\\/now\\/?$","segments":[[{"content":"now","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/now.astro","pathname":"/now","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/art/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/art","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/art\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/art.astro","pathname":"/portfolio/art","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/dev/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/dev","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/dev\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"dev","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/dev.astro","pathname":"/portfolio/dev","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/writing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/writing","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/writing\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/writing.astro","pathname":"/portfolio/writing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio","isIndex":true,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/index.astro","pathname":"/portfolio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resume/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resume","isIndex":false,"type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/check-password","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/check-password\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"check-password","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/check-password.ts","pathname":"/api/check-password","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://lowyelling.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/lilyluo/dev/personal-site/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/lilyluo/dev/personal-site/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/lilyluo/dev/personal-site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/lilyluo/dev/personal-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/lilyluo/dev/personal-site/src/pages/now.astro",{"propagation":"none","containsHead":true}],["/Users/lilyluo/dev/personal-site/src/pages/portfolio/art.astro",{"propagation":"none","containsHead":true}],["/Users/lilyluo/dev/personal-site/src/pages/portfolio/dev.astro",{"propagation":"none","containsHead":true}],["/Users/lilyluo/dev/personal-site/src/pages/portfolio/index.astro",{"propagation":"none","containsHead":true}],["/Users/lilyluo/dev/personal-site/src/pages/portfolio/writing.astro",{"propagation":"none","containsHead":true}],["/Users/lilyluo/dev/personal-site/src/pages/resume.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/check-password@_@ts":"pages/api/check-password.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/now@_@astro":"pages/now.astro.mjs","\u0000@astro-page:src/pages/portfolio/art@_@astro":"pages/portfolio/art.astro.mjs","\u0000@astro-page:src/pages/portfolio/dev@_@astro":"pages/portfolio/dev.astro.mjs","\u0000@astro-page:src/pages/portfolio/writing@_@astro":"pages/portfolio/writing.astro.mjs","\u0000@astro-page:src/pages/portfolio/index@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/resume@_@astro":"pages/resume.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bor9VOQN.mjs","/Users/lilyluo/dev/personal-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dy33qzx8.mjs","/Users/lilyluo/dev/personal-site/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/lilyluo/dev/personal-site/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CIs8NYHA.mjs","/Users/lilyluo/dev/personal-site/src/pages/resume.astro?astro&type=script&index=0&lang.ts":"_astro/resume.astro_astro_type_script_index_0_lang.BwDB8301.js","/Users/lilyluo/dev/personal-site/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.DJOoriw3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/lilyluo/dev/personal-site/src/pages/resume.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"password-gate\"),n=document.getElementById(\"resume-content\"),c=document.getElementById(\"password-form\"),t=document.getElementById(\"password-input\"),e=document.getElementById(\"error-message\");sessionStorage.getItem(\"resume-unlocked\")===\"true\"&&(s.style.display=\"none\",n.style.display=\"block\");c?.addEventListener(\"submit\",async o=>{o.preventDefault(),e.textContent=\"\";const a=t.value;try{(await(await fetch(\"/api/check-password\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({password:a})})).json()).success?(sessionStorage.setItem(\"resume-unlocked\",\"true\"),s.style.display=\"none\",n.style.display=\"block\"):(e.textContent=\"Incorrect password\",t.value=\"\")}catch{e.textContent=\"Something went wrong. Try again.\"}});"],["/Users/lilyluo/dev/personal-site/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts","const m=document.getElementById(\"theme-toggle\"),e=document.documentElement,a=localStorage.getItem(\"theme\"),o=window.matchMedia(\"(prefers-color-scheme: dark)\").matches;(a===\"dark\"||!a&&o)&&e.setAttribute(\"data-theme\",\"dark\");m?.addEventListener(\"click\",()=>{const t=e.getAttribute(\"data-theme\")===\"dark\"?\"light\":\"dark\";e.setAttribute(\"data-theme\",t),localStorage.setItem(\"theme\",t)});"]],"assets":["/favicon.svg","/resume.pdf","/about/index.html","/blog/index.html","/now/index.html","/portfolio/art/index.html","/portfolio/dev/index.html","/portfolio/writing/index.html","/portfolio/index.html","/resume/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"yOqd6/I7iX2NRim5C+l8V0cGC+RMyBj8THhgrzMQsXc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
