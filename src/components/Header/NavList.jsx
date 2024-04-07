import { NavItem } from '@/components/Header/NavItem';

export const NavList = () => {
  const navItems = [
    { to: 'tasks', name: 'Tasks' },
    { to: 'users', name: 'Users' },
  ];

  return (
    <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((navItemProps) => (
        <NavItem key={navItemProps.name} {...navItemProps} />
      ))}
    </ul>
  );
};
