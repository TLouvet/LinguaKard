import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage } from './pages/HomePage';
import { KanaPage } from './pages/KanaPage';
import { KanjiPage } from './pages/KanjiPage';
import { HangeulPage } from './pages/HangeulPage';
import { KoreanWordsPage } from './pages/KoreanWordsPage';
import { ArabicPage } from './pages/ArabicPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kana" element={<KanaPage />} />
          <Route path="/kanji" element={<KanjiPage />} />
          <Route path="/hangeul" element={<HangeulPage />} />
          <Route path="/korean-words" element={<KoreanWordsPage />} />
          <Route path="/arabic" element={<ArabicPage />} />
        </Routes>
      </div>
      <ToastContainer position="bottom-right" theme="light" />
    </HashRouter>
  );
}

export default App;
