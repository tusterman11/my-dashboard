import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <div className="min-h-screen bg-background p-4 text-foreground">
        <Header />
      </div>

      <div className="flex-1 bg-background p-4 text-foreground">
        <Footer />
      </div>
    </>
  );
}

export default App;
