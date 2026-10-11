import { crearRouter } from './router';

const router = crearRouter({
  '/': () => '<h1>Inicio</h1><p>SPA sin framework, con TypeScript y Vite.</p>',
  '/acerca': () => '<h1>Acerca</h1><p>Router por hash y render declarativo.</p>',
});

router.render();
