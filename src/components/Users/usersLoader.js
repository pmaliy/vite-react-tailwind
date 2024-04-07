import { getUsers } from '@/api/users';

export const usersLoader = async () => {
  const { users } = await getUsers();

  return { users };
};
