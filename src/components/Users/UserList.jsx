import { useState, useEffect } from 'react';
import { Card } from '@material-tailwind/react';
import { UserListItem } from '@/components/Users/UserListItem';
import { getUsers } from '@/api/users';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = () =>
    getUsers().then((data = {}) => data.users && setUsers(data.users));

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Card className="w-full">
      <table className="w-full min-w-max table-auto text-center">
        <tbody>
          {users.map((userProps, index) => (
            <UserListItem
              key={userProps.id}
              {...userProps}
              isLast={index === users.length - 1}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
};
