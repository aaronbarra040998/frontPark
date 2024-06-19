import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Modal from '@/Layout/Modal';
import Home from '@/Pages/Home';
import Preinscription from '@/Pages/Preinscription';

import Navbar from '@/Layout/Navbar';
function App() {
  return (
    <BrowserRouter>
      <>        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/preinscription' element={<Preinscription />} />

        </Routes>
        {/* <Modal /> */}
      </>
    </BrowserRouter>
  );
}

export default App;
