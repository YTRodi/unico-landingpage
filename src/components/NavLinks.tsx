const NAV_LINKS = ['Home', 'About Us', 'Team', 'Our Services', 'Clients'];

const NavLinks = () => (
  <ul className="flex gap-10 items-center">
    {NAV_LINKS.map((to, index) => {
      const isFirstNavLink = index === 0;
      const conditionalStyle = isFirstNavLink ? 'text-pink' : '';

      return (
        <li key={index}>
          <a
            className={`font-semibold transition-all hover:text-pink ${conditionalStyle}`}
          >
            {to}
          </a>
        </li>
      );
    })}
  </ul>
);

export default NavLinks;
