import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import PokeMenu from "./components/poke-menu/PokeMenu";
import PokeSearch from "./components/poke-search/PokeSearch";
import Routes from "./routes/layout/Routes";
import { Container } from "./styles/Container";

function App() {
  return (
    <BrowserRouter>
      {/* Menu */}
      <PokeMenu />

      <Container>
        {/* Search */}
        <PokeSearch />

        {/* Routes */}
        <Routes />
      </Container>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
