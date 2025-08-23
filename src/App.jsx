import { ThemeProvider } from './components/ThemeProvider';
import { HomePage } from './pages/HomePage';
import './utils/animations';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
