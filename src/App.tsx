import {
  AboutUs,
  Clients,
  Hero,
  MainLayout,
  Navbar,
  OurServices,
  Team,
} from './components';

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <OurServices />
      <Clients />
    </MainLayout>
  );
}

export default App;
