import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouting';
import './App.scss';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
