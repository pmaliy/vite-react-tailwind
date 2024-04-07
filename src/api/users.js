import { get } from '@/api/rest';

const BASE = 'https://dummyjson.com/users';

export const getUsers = async () => await get(BASE);
export const getUser = async (id) => await get(BASE + '/' + id);
