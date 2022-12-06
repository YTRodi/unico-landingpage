import { AboutUs, Hero, MainLayout, Navbar, Team } from './components';

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
    </MainLayout>
  );
}

export default App;
