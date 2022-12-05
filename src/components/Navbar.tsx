import Button from './Button';
import Logo from './Logo';
import NavLinks from './NavLinks';

interface Props {
  showContactUsButton?: boolean;
}

const Navbar = ({ showContactUsButton = true }: Props) => (
  <nav
    className={`fixed top-10 right-[11.75rem] left-[11.75rem] flex justify-between`}
  >
    <Logo />
    <div className="flex gap-10 items-center">
      <NavLinks />
      {showContactUsButton && <Button>Contact Us</Button>}
    </div>
  </nav>
);

export default Navbar;
