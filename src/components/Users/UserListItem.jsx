import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Typography, Avatar } from '@material-tailwind/react';

export const UserListItem = ({
  isLast,
  id,
  image,
  firstName,
  lastName,
  email,
}) => {
  const navigate = useNavigate();
  const classes = isLast ? 'p-2' : 'p-2 border-b border-blue-gray-50';

  return (
    <tr
      key={id}
      className="hover:cursor-pointer"
      onClick={() => navigate('/users/' + id)}
    >
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          <Avatar src={image} alt={firstName + ' ' + lastName} size="sm" />
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {firstName} {lastName}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {email}
        </Typography>
      </td>
    </tr>
  );
};

UserListItem.propTypes = {
  isLast: PropTypes.bool,
  id: PropTypes.string,
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};
