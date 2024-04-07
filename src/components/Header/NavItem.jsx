import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

export const NavItem = ({ to, name }) => (
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-medium"
  >
    <Link
      to={to}
      className="flex items-center hover:text-blue-500 transition-colors"
    >
      {name}
    </Link>
  </Typography>
);

NavItem.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
};
