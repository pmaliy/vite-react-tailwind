import { useRouteError, Link } from 'react-router-dom';
import { Card, Typography } from '@material-tailwind/react';

export const ErrorPage = () => {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div className="bg-blue-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-2xl p-3 flex justify-center items-center">
        <Card className="w-full p-16 flex justify-center items-center">
          <Typography variant="h1">Oops!</Typography>
          <Typography variant="p">
            Sorry, an unexpected error has occurred.
          </Typography>
          <Typography variant="p">
            <i>{error.statusText || error.message}</i>
          </Typography>
          <div className="mt-4 flex gap-2">
            <Link
              to="/tasks"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Tasks
            </Link>
            {'|'}
            <Link
              to="/users"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Users
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
