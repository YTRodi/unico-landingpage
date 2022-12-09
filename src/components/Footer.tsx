import Button from './Button';
import Navbar from './Navbar';
import Social from './Social';

import { SOCIALS_LOGOS } from '~/constants';

const Footer = () => (
  <footer className="h-[60vh] flex flex-col">
    <BlockOne />
    <BlockTwo />
  </footer>
);

const BlockOne = () => (
  <div className="relative h-[40%] w-full flex justify-center items-center">
    <ContactUsCard />
  </div>
);

const BlockTwo = () => (
  <div className="pb-4 h-[60%] bg-gradient-to-b from-purple to-purple/75 px-[11.75rem] flex gap-6 flex-col justify-end">
    <Navbar showContactUsButton={false} variant="secondary" />
    <hr className="text-white" />
    <div className="flex justify-between items-center">
      <p className="text-white">&copy; 2022</p>
      <Socials />
    </div>
  </div>
);

const ContactUsCard = () => (
  <div className="absolute top-1/2 left-[11.75rem] right-[11.75rem] h-full shadow-lg rounded-md bg-white flex justify-evenly items-center">
    <div className="flex gap-4 flex-col">
      <div>
        <h2>{"Let's start"}</h2>
        <h2 className="font-bold">working together!</h2>
      </div>
      <p>We can do amazing things.</p>
    </div>
    <Button>Contact Us</Button>
  </div>
);

const Socials = () => (
  <div className="flex gap-4 items-center">
    {SOCIALS_LOGOS.map((social, index) => (
      <Social key={index} {...social} />
    ))}
  </div>
);

export default Footer;
