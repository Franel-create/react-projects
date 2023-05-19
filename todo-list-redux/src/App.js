import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import CompletedTasks from './components/CompletedTasks';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/completed' element={<CompletedTasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
