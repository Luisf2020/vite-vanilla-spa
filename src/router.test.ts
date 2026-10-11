import { describe, expect, it } from 'vitest';
import { crearRouter } from './router';

describe('router', () => {
  it('expone render', () => {
    document.body.innerHTML = '<div id="app"></div>';
    const r = crearRouter({ '/': () => '<h1>ok</h1>' });
    r.render();
    expect(document.getElementById('app')!.innerHTML).toContain('ok');
  });
});
