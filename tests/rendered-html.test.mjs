import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the finished Red Lions page", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /Red Lions Tattoo \| Estúdio de tatuagem na Tijuca/);
  assert.match(html, /Sua história/);
  assert.match(html, /5521986367782/);
  assert.doesNotMatch(html, /5521995562355/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("uses the GitHub Pages base path for public assets", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /\/red-lions-tattoo\/images\/studio-v2\.webp/);
  assert.match(html, /\/red-lions-tattoo\/og\.png/);
  await access(new URL("images/studio-v2.webp", outputRoot));
  await access(new URL("og.png", outputRoot));
});
