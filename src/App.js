import './App.css';
import Contenu from './Composants/Contenu/Contenu';
import ThemeContextProvider from './Context/ThemeContext';
import BtnToogle from './Composants/BtnToogle/BtnToogle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BtnToogle />
        < Contenu />
      </ThemeContextProvider>  
    </div>
  );
}

export default App;
