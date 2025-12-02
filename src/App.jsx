import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ChatPage } from './pages/ChatPage';

import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
 return (
 <Router>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/chat" element={<ChatPage />} />
 <Route path="/login" element={<Login />} />
 <Route path="/signup" element={<Signup />} />
 </Routes>
 </Router>
 );
}

export default App;
