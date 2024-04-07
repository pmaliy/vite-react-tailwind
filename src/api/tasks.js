import { get, set } from '@/api/local';

const key = 'tasks';

export const getTasks = async () => await get(key);

export const createTask = async (data) => {
  const id = Math.random().toString(36).substring(2, 9);
  const task = { id, createdAt: Date.now(), ...data };
  const tasks = await getTasks();

  tasks.unshift(task);
  await set(key, tasks);

  return task;
};

export const updateTask = async (id, data) => {
  const tasks = await getTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) throw new Error('Task not found', id);

  Object.assign(task, data);

  await set(key, tasks);

  return task;
};

export const deleteTask = async (id) => {
  const tasks = await getTasks();
  const index = tasks.findIndex((t) => t.id === id);

  if (index > -1) {
    tasks.splice(index, 1);

    await set(key, tasks);

    return true;
  }

  return false;
};
