import {
  AboutUs,
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
    </MainLayout>
  );
}

export default App;
