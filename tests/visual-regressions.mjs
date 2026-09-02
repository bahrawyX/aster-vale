import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = async (path) => {
  try {
    return await readFile(path, "utf8");
  } catch {
    return "";
  }
};

const css = (await read("assets/css/aster-vale-overrides.css")).replace(
  /\/\*[\s\S]*?\*\//g,
  "",
);
const fixes = (await read("assets/js/aster-vale-fixes.js")).replace(
  /\/\/.*$/gm,
  "",
);
const html = await read("index.html");
const runtimeJs = await read("assets/js/site.readable.js");

assert.match(css, /\.seasons-s_tabs\s*\{[^}]*display:\s*none\s*!important/s);
assert.match(css, /\.modal_menu_top\s*\{[^}]*height:\s*14dvh\s*!important/s);
assert.match(css, /\[data-nav\]\.modal_menu_nav\s*\{[^}]*gap:\s*0\s*!important/s);
assert.match(css, /\.mob_menu-btn_ico_line\.bot\s*\{[^}]*transform-origin:\s*center/s);
assert.doesNotMatch(
  css.match(/\.mob_menu-btn_ico_line\.bot\s*\{[^}]*\}/s)?.[0] ?? "",
  /transform:\s*none\s*!important/,
);
assert.doesNotMatch(html, /class="fin-w_scene-bg/);
assert.doesNotMatch(css, /fin_mounain\.avif/);
assert.doesNotMatch(fixes, /dev-s_card_studio-label/);
assert.doesNotMatch(css, /dev-s_card_studio-label/);
assert.doesNotMatch(html, /aster-vale-film(?:-short)?\.mp4/);
assert.doesNotMatch(html, /modal-media-open="video"/);
assert.doesNotMatch(runtimeJs, /runtime\/hero-video|aster-vale-film\.mp4/);
assert.doesNotMatch(runtimeJs, /length:\s*120/);
assert.match(css, /\.hero-scroll-area\s*\{[^}]*height:\s*180svh\s*!important/s);
assert.match(css, /\.hero-w_bg\s+\.img-w\s*\{[^}]*69a3899482e24dd9d010b5f1_hero-video_00\.webp/s);
assert.match(css, /\.hero-w_bg\s+\.scroll-video\s*\{[^}]*display:\s*none\s*!important/s);
assert.match(css, /\.hero-w_scene-over,[\s\S]*?\.hero-w_scene-bg\s*\{[^}]*display:\s*none\s*!important/s);
assert.match(css, /\.mob_hero-w_bg\s+\.img-w\s*\{[^}]*69a3899482e24dd9d010b5f1_hero-video_00\.webp/s);
assert.match(css, /\.prolog-s\s*\{[^}]*height:\s*auto\s*!important/s);
assert.match(css, /\.apartments-s\s*\{[^}]*min-height:\s*0\s*!important/s);
assert.match(css, /\.apartments-s\s*>\s*\.u-136:first-child\s*\{[^}]*height:\s*3rem\s*!important/s);
assert.match(css, /\.mob_fin-s_scene\s*\{[^}]*display:\s*none\s*!important/s);
assert.match(css, /#ownership\s+\[parallax\][^{]*\{[^}]*transform:\s*none\s*!important/s);
assert.match(css, /\.dev-w_scene-over,[\s\S]*?\.dev-w_scene-bg\s*\{[^}]*display:\s*none\s*!important/s);
assert.doesNotMatch(fixes, /footer-orbit-media|footer-starlight\.mp4/);
assert.doesNotMatch(css, /footer-orbit-media/);
assert.match(css, /\.footer-w_bg_scene\s*\{[^}]*opacity:\s*1/s);
assert.match(runtimeJs, /function\s+initStaticHeroZoom\s*\(/);
assert.match(runtimeJs, /initStaticHeroZoom\(\)/);
assert.match(runtimeJs, /scale:\s*1\.28/);
assert.match(runtimeJs, /scrub:\s*0\.6/);
assert.doesNotMatch(html, /<section\s+id="about"/);
assert.doesNotMatch(html, /class="about-s_transition"/);
assert.doesNotMatch(html, /href="#about"/);
assert.doesNotMatch(html, /property="og:video/);
assert.match(html, /content="https:\/\/astervale\.vercel\.app\/assets\/media\/aster-vale\/site\/6999d59a988f9410fbe97cdd_og_en\.webp"\s+property="og:image"/);
assert.match(html, /assets\/js\/aster-vale-fixes\.js/);
assert.match(html, /aster-vale-overrides\.css\?v=20260902a/);

for (const removedVideo of [
  "assets/media/aster-vale/runtime/aster-vale-film.mp4",
  "assets/media/aster-vale/runtime/aster-vale-film-short.mp4",
  "assets/media/aster-vale/runtime/hero-video",
  "assets/media/aster-vale/runtime/hero-video-dark",
  "assets/media/aster-vale/runtime/aster-vale-og.mp4",
]) {
  await assert.rejects(access(removedVideo));
}

console.log("Visual regression guards passed.");
