import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('Discord component preview has a flag, the right accent, and link buttons', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const json = html.match(/<script id="discord:component-embed" type="application\/json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(json);
  assert.ok(Buffer.byteLength(json) < 3000);
  const { component } = JSON.parse(json.replaceAll('%SITE_URL%', 'https://example.github.io/test/'));
  assert.equal(component.type, 17);
  assert.equal(component.accent_color, 0x3e5524);
  const section = component.components.find((part) => part.type === 9);
  assert.equal(section.accessory.type, 11);
  assert.equal(section.accessory.media.url, 'https://example.github.io/test/brand/flag-share.png');
  const row = component.components.find((part) => part.type === 1);
  assert.equal(row.components.length, 3);
  for (const button of row.components) {
    assert.equal(button.type, 2);
    assert.equal(button.style, 5);
    assert.ok(button.label);
    assert.equal(new URL(button.url).protocol, 'https:');
  }
});
