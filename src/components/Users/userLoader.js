import { getUser } from '@/api/users';

export const userLoader = async ({ params: { userId } }) => {
  const user = await getUser(userId);
  return { user };
};
