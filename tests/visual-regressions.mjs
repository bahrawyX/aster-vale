import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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

assert.match(css, /\.seasons-s_tabs\s*\{[^}]*display:\s*none\s*!important/s);
assert.match(css, /\.modal_menu_top\s*\{[^}]*height:\s*14dvh\s*!important/s);
assert.match(css, /\[data-nav\]\.modal_menu_nav\s*\{[^}]*gap:\s*0\s*!important/s);
assert.match(css, /\.mob_menu-btn_ico_line\.bot\s*\{[^}]*transform-origin:\s*center/s);
assert.doesNotMatch(
  css.match(/\.mob_menu-btn_ico_line\.bot\s*\{[^}]*\}/s)?.[0] ?? "",
  /transform:\s*none\s*!important/,
);
assert.match(css, /\.fin-w_scene-bg\s*\{[^}]*bottom:\s*0/s);
assert.match(css, /\.fin-w_scene-bg\s*\{[^}]*fin_mounain\.avif/s);
assert.match(css, /\.fin-w_scene-bg\s+\.scene\s*\{[^}]*transform:\s*none\s*!important/s);
assert.match(css, /\.fin-w_scene-bg\s+\.scene\s*\{[^}]*display:\s*none\s*!important/s);
assert.match(fixes, /dev-s_card_studio-label/);
assert.match(fixes, /footer-orbit-media/);
assert.match(fixes, /footer-starlight\.mp4/);
assert.match(html, /assets\/js\/aster-vale-fixes\.js/);
assert.match(html, /aster-vale-overrides\.css\?v=20260901d/);

console.log("Visual regression guards passed.");
