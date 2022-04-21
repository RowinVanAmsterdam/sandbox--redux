import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Core from './pages/Core';
import Toolkit from './pages/Toolkit';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/toolkit" element={<Toolkit />} />
        <Route path="/core" element={<Core />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
