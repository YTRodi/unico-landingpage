import Button from './Button';
import Logo from './Logo';
import NavLinks from './NavLinks';

interface Props {
  showContactUsButton?: boolean;
  variant?: 'primary' | 'secondary';
}

const Navbar = ({ showContactUsButton = true, variant = 'primary' }: Props) => (
  <nav className={`h-[3.125rem] flex justify-between`}>
    <Logo {...{ variant }} />
    <div className="flex gap-10 items-center">
      <NavLinks {...{ variant }} />
      {showContactUsButton && <Button>Contact Us</Button>}
    </div>
  </nav>
);

export default Navbar;
