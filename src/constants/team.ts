import { Props as Member } from '~/components/MemberCard';

const TEAM_MEMBERS: Array<Omit<Member, 'src'>> = [
  { fullName: 'Cody Fisher', position: 'Founder' },
  { fullName: 'Albert Flores', position: 'SEO Specialist' },
  { fullName: 'Eleanor Pena', position: 'Marketing Specialist' },
  { fullName: 'Sara Rea', position: 'Product Designer' },
];

export { TEAM_MEMBERS };
