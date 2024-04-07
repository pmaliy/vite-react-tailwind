import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';

export const App = () => {
  return (
    <div className="bg-blue-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-2xl p-3">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
