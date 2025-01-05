import { Suspense } from 'react';
import { routes } from '@/lib/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: routes,
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
