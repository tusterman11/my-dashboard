import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';

const eras = [
  {
    title: 'Early Black Metal Roots',
    genre: 'Black Metal',
    period: '1990–1996',
    description:
      'Opeth emerged from the Swedish black metal scene, blending traditional black metal with progressive and death metal influences.',
    details:
      "Opeth's early black metal roots were characterized by a raw, atmospheric sound that would later evolve into their signature progressive style.",
  },
  {
    title: 'Progressive Metal Evolution',
    genre: 'Progressive Death Metal',
    period: '1997–2005',
    description:
      'The band developed its distinctive progressive metal sound, balancing heavy passages with acoustic sections and dynamic arrangements.',
    details:
      'This era expanded Opeth’s songwriting and sound, bringing together progressive structures, death metal, and quieter acoustic passages.',
  },
  {
    title: 'Experimental and Diverse Sound',
    genre: 'Progressive Rock',
    period: '2006–2024',
    description:
      'Opeth continued to evolve, exploring new textures and a broader range of progressive sounds.',
    details:
      'Across later releases, the band continued to experiment with its sound while building on its progressive metal foundations.',
  },
];

const records = [
  {
    title: 'Orchid',
    genre: '',
    year: '1995',
    description: '',
  },

  {
    title: 'Morningrise',
    genre: '',
    year: '1996',
    description: '',
  },

  {
    title: 'My Arms, Your Hearse',
    genre: '',
    year: '1998',
    description: '',
  },

  {
    title: 'Still Life',
    genre: '',
    year: '1999',
    description: '',
  },

  {
    title: 'Blackwater Park',
    genre: '',
    year: '2001',
    description: '',
  },

  {
    title: 'Deliverance',
    genre: '',
    year: '2002',
    description: '',
  },

  {
    title: 'Damnation',
    genre: '',
    year: '2003',
    description: '',
  },

  {
    title: 'Ghost Reveries',
    genre: '',
    year: '2005',
    description: '',
  },

  {
    title: 'Watershed',
    genre: '',
    year: '2008',
    description: '',
  },

  {
    title: 'Heritage',
    genre: '',
    year: '2011',
    description: '',
  },

  {
    title: 'Pale Communion',
    genre: '',
    year: '2014',
    description: '',
  },

  {
    title: 'Sorceress',
    genre: '',
    year: '2016',
    description: '',
  },

  {
    title: 'In Cauda Venenum',
    genre: '',
    year: '2019',
    description: '',
  },

  {
    title: 'The Last Will and Testament',
    genre: '',
    year: '2024',
    description: '',
  },
];

const summaryCards = [
  { title: 'Documented Tracks', value: '150 +' },
  { title: 'Studio Albuns', value: 14 },
  { title: 'Years Active', value: '35 +', isHighlighted: true },
  { title: 'Musical Eras', value: '3' },
];

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
          <section className="m-4 md:w-[50%] text-muted">
            This is a page dedicated to showcasing Opeth's musical journey and
            discography. It was made as a tribute to the band and its fans,
            highlighting their contributions to the progressive metal genre and
            their impact on the music industry.
          </section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            {summaryCards.map((card) => (
              <SummaryCard
                key={card.title}
                title={card.title}
                value={card.value}
              />
            ))}
          </div>
        </Panel>
        <Panel
          id="highlight"
          title="Musical Eras"
          className="md:col-span-2 xl:col-span-1"
        >
          <div className="divide-y divide-border">
            {eras.map((era, index) => (
              <article key={era.title} className="py-5 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {era.title}
                  </h3>
                  <StatusBadge label={era.genre} isActive={index === 0} />
                </div>
                <div className="mt-2"></div>
                <p className="mt-2 text-sm leading-5 text-muted">
                  {era.description}
                </p>
                <div>
                  <InfoRow label="Period" value={era.period} />
                </div>
                <DetailsToggle>
                  <p className="text-sm text-muted">{era.details}</p>
                </DetailsToggle>
              </article>
            ))}
          </div>
        </Panel>
        <Panel id="discography" title="Discography">
          <ul>
            {records.map((record) => (
              <li
                key={record.title}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-border py-3"
              >
                <div>
                  <p className="font-bold">{record.title}</p>
                  <p className="text-sm text-muted">{record.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
