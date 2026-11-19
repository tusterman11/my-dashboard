import Menu from '../components/Menu.jsx';
import Panel from '../components/Panel.jsx';
import InfoRow from '../components/InfoRow.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import DetailsToggle from '../components/DetailsToggle.jsx';
import ListItem from '../components/ListItem.jsx';
import SummaryCard from '../components/SummaryCard.jsx';
import { Link } from 'react-router-dom';
import { opethEras } from '../data/opeth.js';
import { useOpeth } from '../context/OpethContext';

const summaryCards = [
  { id: 'tracks', title: 'Documented Tracks', value: '150 +' },
  { id: 'albums', title: 'Studio Albums', value: 14 },
  { id: 'years', title: 'Years Active', value: '35 +', isHighlighted: true },
  { id: 'eras', title: 'Musical Eras', value: 3 },
];

function DashboardPage() {
  const { opeth } = useOpeth();
  const firstRecords = opeth.slice(0, 3);

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
          {opethEras.map((era, index) => (
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
          See All ({opeth.length})
        </Link>
      </Panel>
    </>
  );
}

export default DashboardPage;
