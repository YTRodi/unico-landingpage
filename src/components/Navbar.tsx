import Button from './Button';
import Logo from './Logo';
import NavLinks from './NavLinks';

interface Props {
  showContactUsButton?: boolean;
}

const Navbar = ({ showContactUsButton = true }: Props) => (
  <nav className="flex justify-between mt-10">
    <Logo />
    <div className="flex gap-10 items-center">
      <NavLinks />
      {showContactUsButton && <Button>Contact Us</Button>}
    </div>
  </nav>
);

export default Navbar;
