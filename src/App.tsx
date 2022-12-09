import {
  AboutUs,
  Clients,
  Footer,
  Hero,
  MainLayout,
  Navbar,
  OurServices,
  Team,
} from './components';

const App = () => (
  <div>
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <OurServices />
      <Clients />
    </MainLayout>
    <Footer />
  </div>
);

export default App;
