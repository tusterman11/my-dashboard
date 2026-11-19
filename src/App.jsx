import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ListPage from './pages/ListPage.jsx';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import NewSong from './pages/NewSong.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main
        className="grid flex-1 grid-cols-1 gap-4 bg-background p-4
          md:grid-cols-2 md:gap-6 md:p-6
          xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/lista" element={<ListPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/new" element={<NewSong />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
