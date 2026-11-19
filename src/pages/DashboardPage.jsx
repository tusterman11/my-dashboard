import SummaryCard from '../components/SummaryCard.jsx';
import Panel from '../components/Panel.jsx';
import InfoRow from '../components/InfoRow.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import DetailsToggle from '../components/DetailsToggle.jsx';
import ListItem from '../components/ListItem.jsx';
import Menu from '../components/Menu.jsx';
import { Link } from 'react-router-dom';

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
  { id: 'orchid', title: 'Orchid', year: '1995', genre: 'Black Metal' },
  {
    id: 'morningrise',
    title: 'Morningrise',
    year: '1996',
    genre: 'Black Metal',
  },
  {
    id: 'my-arms-your-hearse',
    title: 'My Arms, Your Hearse',
    year: '1998',
    genre: 'Black Metal',
  },
  {
    id: 'still-life',
    title: 'Still Life',
    year: '1999',
    genre: 'Progressive Death Metal',
  },
  {
    id: 'blackwater-park',
    title: 'Blackwater Park',
    year: '2001',
    genre: 'Progressive Death Metal',
  },
  {
    id: 'deliverance',
    title: 'Deliverance',
    year: '2002',
    genre: 'Progressive Death Metal',
  },
  {
    id: 'damnation',
    title: 'Damnation',
    year: '2003',
    genre: 'Progressive Rock',
  },
  {
    id: 'ghost-reveries',
    title: 'Ghost Reveries',
    year: '2005',
    genre: 'Progressive Death Metal',
  },
  {
    id: 'watershed',
    title: 'Watershed',
    year: '2008',
    genre: 'Progressive Death Metal',
  },
  {
    id: 'heritage',
    title: 'Heritage',
    year: '2011',
    genre: 'Progressive Rock',
  },
  {
    id: 'pale-communion',
    title: 'Pale Communion',
    year: '2014',
    genre: 'Progressive Rock',
  },
  {
    id: 'sorceress',
    title: 'Sorceress',
    year: '2016',
    genre: 'Progressive Rock',
  },
  {
    id: 'in-cauda-venenum',
    title: 'In Cauda Venenum',
    year: '2019',
    genre: 'Progressive Rock',
  },
  {
    id: 'the-last-will-and-testament',
    title: 'The Last Will and Testament',
    year: '2024',
    genre: 'Progressive Rock/Metal',
  },
];

const summaryCards = [
  { id: 'tracks', title: 'Documented Tracks', value: '150 +' },
  { id: 'albums', title: 'Studio Albums', value: 14 },
  { id: 'years', title: 'Years Active', value: '35 +', isHighlighted: true },
  { id: 'eras', title: 'Musical Eras', value: 3 },
];

function DashboardPage() {
  const firstRecords = records.slice(0, 3);

  return (
    <>
      <Menu />
      <Panel id="summary" title="Summary" className="md:col-span-2">
        <section className="m-4 md:w-[50%] text-muted">
          This is a page dedicated to showcasing Opeth's musical journey and
          discography. It was made as a tribute to the band and its fans,
          highlighting their contributions to the progressive metal genre and
          their impact on the music industry.
        </section>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {summaryCards.map((card) => (
            <SummaryCard
              key={card.id}
              title={card.title}
              value={card.value}
              isHighlighted={card.isHighlighted}
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
              <p className="mt-2 text-sm leading-5 text-muted">
                {era.description}
              </p>
              <InfoRow label="Period" value={era.period} />
              <DetailsToggle>
                <p className="text-sm text-muted">{era.details}</p>
              </DetailsToggle>
            </article>
          ))}
        </div>
      </Panel>

      <Panel id="discography" title="Discography">
        {firstRecords.length > 0 ? (
          <ul>
            {firstRecords.map((record) => (
              <ListItem
                key={record.id}
                title={record.title}
                year={record.year}
                genre={record.genre}
              />
            ))}
          </ul>
        ) : (
          <p className="text-muted">No records found.</p>
        )}
        <Link
          to="/lista"
          className="mt-4 inline-block rounded-lg border border-border px-3 py-2 font-bold text-primary hover:border-primary"
        >
          See All ({records.length})
        </Link>
      </Panel>
    </>
  );
}

export default DashboardPage;
