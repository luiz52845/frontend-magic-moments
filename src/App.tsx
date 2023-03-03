
import { GlobalStyle } from './styles/global';
import { Router} from './Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Router></Router>
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>

  );
}

export default App;
