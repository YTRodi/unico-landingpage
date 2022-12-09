import { Props as Client } from '~/components/ClientCard';

const CLIENTS: Array<Omit<Client, 'clientImgSrc'>> = [
  {
    fullName: 'Robert Jame',
    position: 'CEO',
    company: 'Airbnb',
    comment: `“I am very happy to have trusted you, it turned out to be more than my
    expectations and so far there have been no problems. Thank you for this
    work together.”`,
  },
  {
    fullName: 'Theresa Webb',
    position: 'CEO',
    company: 'Microsoft',
    comment: `“The results were always incredible. Great people and professionals.”`,
  },
  {
    fullName: 'Jane Cooper',
    position: 'Founder',
    company: 'FedEx',
    comment: `“Good process with good results. We were able to overcome difficulties and get very far. Thank you for your time and effort.”`,
  },
];

const COMPANIES_LOGOS = [
  'airbnb',
  'hubspot',
  'google',
  'microsoft',
  'walmart',
  'fedex',
];

export { CLIENTS, COMPANIES_LOGOS };
