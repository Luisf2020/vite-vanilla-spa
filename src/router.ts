export type Vistas = Record<string, () => string>;

export function crearRouter(vistas: Vistas) {
  const contenedor = document.getElementById('app')!;

  function render() {
    const ruta = location.hash.replace(/^#/, '') || '/';
    const vista = vistas[ruta] ?? vistas['/'];
    contenedor.innerHTML = vista();
  }

  window.addEventListener('hashchange', render);
  return { render };
}
