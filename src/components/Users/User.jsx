import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUser } from '@/api/users';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Avatar,
  Chip,
} from '@material-tailwind/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const loadUser = (userId) =>
    getUser(userId).then((data) => data && setUser(data));

  useEffect(() => {
    loadUser(userId);
  }, [userId]);

  const {
    image,
    firstName,
    lastName,
    email,
    age,
    gender,
    phone,
    username,
    birthDate,
    domain,
    address = {},
    university,
    company = {},
    crypto = {},
    ip,
    bank = {},
  } = user;

  return (
    <Card className="mt-9 w-full flex justify-center items-center">
      <CardHeader className="p-4 rounded-full h-36 w-36" shadow floated>
        {user.id && (
          <Avatar
            src={image}
            alt={firstName + ' ' + lastName}
            size="xxl"
            variant="square"
          />
        )}
      </CardHeader>
      <CardBody className="w-full">
        {user.id ? (
          <>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-2 text-center"
            >
              {firstName + ' ' + lastName}
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Chip
                variant="outlined"
                value={`Email: ${email}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Age: ${age}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Gender: ${gender}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Phone: ${phone}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Username: ${username}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Birth date: ${birthDate}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Domain: ${domain}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Address: ${address.address}, ${address.city}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`University: ${university}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`${company.title} at ${company.name}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Crypto: ${crypto.coin}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`IP: ${ip}`}
                className="text-balance"
              />
              <Chip
                variant="outlined"
                value={`Bank account: ${bank.iban}`}
                className="text-balance"
              />
            </div>
          </>
        ) : (
          <Typography variant="p">Loading...</Typography>
        )}
      </CardBody>
      <CardFooter className="pt-0">
        <Link to="/users" className="flex gap-2">
          <ArrowLeftIcon className="w-4" /> Back to Users
        </Link>
      </CardFooter>
    </Card>
  );
};
