import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import { HomePage } from './pages/HomePage';
import './utils/animations';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
