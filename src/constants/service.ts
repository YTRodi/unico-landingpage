import { Props as Counter } from '~/components/Counter';
import { Props as Service } from '~/components/ServiceCard';

const SERVICES: Array<Omit<Service, 'iconSrc'>> = [
  {
    title: 'Advertising',
    body: 'Our ability to always exceed the expectations of our clients and produce the most creative output is what makes us unique...',
    backgroundColor: 'purple',
  },
  {
    title: 'Creative Services',
    body: 'Our creative teams are comprised of a diverse range of highly specialized talent from designers, copywriters, technologists...',
    backgroundColor: 'pink',
  },
  {
    title: 'Digital Marketing',
    body: 'Our digital marketing service is led by corporate communication specialists and google certified practitioners ...',
    backgroundColor: 'yellow',
  },
];

const COUNTERS: Counter[] = [
  { title: '+30', body: 'Locations' },
  { title: '+90', body: 'Users' },
  { title: '+300', body: 'Projects' },
  { title: '9', body: 'Years of growth' },
];

export { SERVICES, COUNTERS };
