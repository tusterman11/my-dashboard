import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';

const areaClass =
  'min-h-32 rounded-xl border-2 border-dashed border-border bg-surface p-4 text-muted';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className="grid flex-1 grid-cols-1 content-start gap-4 p-4 bg-background
          md:grid-cols-2 md:gap-6 md:p-6
          xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Menu />
        <Panel id="summary" title="Summary">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            <SummaryCard title="Documented Tracks" value="150 +" />
            <SummaryCard title="Studio Albuns" value={14} />
            <SummaryCard title="Years Active" value="35 +" isHighlighted />
            <SummaryCard title="Musical Eras" value="3" />
          </div>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
