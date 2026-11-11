import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className="grid flex-1 grid-cols-1  gap-4 p-4 bg-background
          md:grid-cols-2 md:gap-6 md:p-6
          xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Menu />
        <Panel id="summary" title="Summary" className="md:col-span-2">
          <section className="m-4 md:w-[50%]">
            This is a page dedicated to showcasing Opeth's musical journey and
            discography. It was made as a tribute to the band and its fans,
            highlighting their contributions to the progressive metal genre and
            their impact on the music industry.
          </section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            <SummaryCard title="Documented Tracks" value="150 +" />
            <SummaryCard title="Studio Albuns" value={14} />
            <SummaryCard title="Years Active" value="35 +" isHighlighted />
            <SummaryCard title="Musical Eras" value="3" />
          </div>
        </Panel>
        <Panel id="highlight" title="Musical Eras" className="md:col-span-2">
          <InfoRow label="Early Black Metal Roots" value="1990-1995" />
          <InfoRow label="Progressive Metal Evolution" value="1996-2005" />
          <InfoRow label="Experimental and Diverse Sound" value="2006-2023" />
        </Panel>
        <Panel id="list" title="Musical Eras">
          <h3 className="mb-4 text-lg font-bold">Early Black Metal Roots</h3>
          <p></p>
        </Panel>
        <Panel id="chart" title="Musical Eras">
          <h3 className="mb-4 text-lg font-bold">Early Black Metal Roots</h3>
          <p></p>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
