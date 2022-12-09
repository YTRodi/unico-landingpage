import HighlightedText from './HighlightedText';
import Link from './Link';
import MemberCard from './MemberCard';

import { TEAM_MEMBERS } from '~/constants';

const Team = () => (
  <div className="h-screen flex gap-16 flex-col justify-center items-center">
    <div className="flex gap-6 flex-col justify-center items-center">
      <Header />
      <TeamMemberCards />
    </div>
    <Link>View All</Link>
  </div>
);

const Header = () => (
  <div className="flex gap-4 flex-col items-center">
    <h6 className="tag text-yellow">TEAM</h6>
    <h2>
      Meet Our <HighlightedText backgroundColor="yellow">Team</HighlightedText>
    </h2>
  </div>
);

const TeamMemberCards = () => (
  <div className="flex gap-12 justify-center items-center">
    {TEAM_MEMBERS.map((member, index) => {
      const src = `/team/member-${index}.svg`;
      const props = { src, ...member };

      return <MemberCard key={index} {...props} />;
    })}
  </div>
);

export default Team;
