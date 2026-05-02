import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.className = 'bg-zinc-950 text-zinc-100';
  }, []);

  return <RouterProvider router={router} />;
}
