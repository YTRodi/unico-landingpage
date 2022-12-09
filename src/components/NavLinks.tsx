import cn from 'classnames';

const NAV_LINKS = ['Home', 'About Us', 'Team', 'Our Services', 'Clients'];

interface Props {
  variant?: 'primary' | 'secondary';
}

const NavLinks = ({ variant = 'primary' }: Props) => (
  <ul className="flex gap-10 items-center">
    {NAV_LINKS.map((to, index) => {
      const isFirstNavLink = index === 0;
      const conditionalStyle = isFirstNavLink ? 'text-pink' : '';

      return (
        <li key={index}>
          <a
            className={cn([
              'font-semibold',
              'transition-all',
              'hover:text-pink',
              {
                primary: 'text-black',
                secondary: 'text-white',
              }[variant],
              conditionalStyle,
            ])}
          >
            {to}
          </a>
        </li>
      );
    })}
  </ul>
);

export default NavLinks;
