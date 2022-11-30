import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterePage from 'pages/RegisterePage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/registere" element={<RegisterePage />} />
    </Routes>
  );
}

export default App;
