import { getTasks } from '@/api/tasks';

export const tasksLoader = async () => {
  const tasks = await getTasks();
  return { tasks };
};
