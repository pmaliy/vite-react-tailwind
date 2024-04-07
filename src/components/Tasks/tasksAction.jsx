import { createTask } from '@/api/tasks';

export const tasksAction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get('title');
  const description = formData.get('description');

  const task = await createTask({ title, description });

  console.log({ title, description }, task);

  return { task };
};
