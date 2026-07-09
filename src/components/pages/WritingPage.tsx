function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.08em',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}
    >
      {children}
    </div>
  );
}

type Entry = {
  title: string;
  detail: string;
  url?: string;
};

const chapbooks: Entry[] = [
  { title: 'The Joy of Pain', detail: 'Solar Luxuriance, 2014 — poetic transcriptions of Bob Ross’s The Joy of Painting' },
  { title: 'The Corpse of Our Separate Youths', detail: 'NAP, 2014' },
  { title: 'Translator’s Note', detail: 'Solar Luxuriance, 2013' },
  { title: 'Japanese Red Leaf Maple', detail: 'Love Symbol Press, 2012' },
  { title: 'Gehennas of Wretched Squawl', detail: 'Pangur Ban Party, 2011' },
];

const inJournals: Entry[] = [
  {
    title: '“Carl and Carl” · “Blowback From Perpetual War”',
    detail: 'Ghost Proposal',
    url: 'https://ghostproposal.com/leif-haven',
  },
  {
    title: '“Desire” · “Staple Gun” · “Omnipresent Surveillance”',
    detail: 'Pinwheel',
    url: 'https://pinwheeljournal.com/poets/leif-haven/',
  },
  {
    title: 'Five poems from The Joy of Pain',
    detail: 'Spork, 2014',
    url: 'http://archive.sporkpress.com/2014/08/31/5-poems-leif-haven/',
  },
  {
    title: '“Ashley & Ashley”',
    detail: 'Everyday Genius, 2013',
    url: 'http://www.everyday-genius.com/2013/07/leif-haven.html',
  },
  {
    title: 'Hangout with Leif Haven and Jared Joseph',
    detail: 'Sink Review, 2015',
    url: 'https://sinkreview.org/sink-15/hangout-with-leif-haven-and-jared-joseph-jun-23-2015-407-pm.html',
  },
  {
    title: 'In conversation with Mia You',
    detail: 'The Conversant, 2016',
    url: 'http://theconversant.org/?p=10352',
  },
];

const essays: Entry[] = [
  {
    title: 'Essays and criticism at Entropy',
    detail:
      'Founding contributor — the ecology column “The Concept World Is No Longer Operational,” an essay on Donna Haraway and the Chthulucene, and film and book criticism, 2014–',
  },
  {
    title: 'Book reviews at HTMLGiant',
    detail: 'Reviews of W.S. Di Piero, Keith Waldrop, Brandon Shimoda, Joyelle McSweeney, and others, 2010–2014',
    url: 'https://htmlgiant.com/tag/leif-haven/',
  },
  {
    title: 'Can Artificial Intelligence Dream?',
    detail: 'Medium, 2018 — training a recurrent neural network on eight years of dream journals',
    url: 'https://medium.com/@leifhaven/can-artificial-intelligence-dream-1b69d1b31055',
  },
];

const press: Entry[] = [
  {
    title: '“Impossible Questions: Leif Haven’s Arcane Rituals”',
    detail: 'Grist, 2017',
    url: 'https://gristjournal.com/2017/03/impossible-questions-leif-havens-arcane-rituals/',
  },
  {
    title: '“A Guidebook From Oblivion”',
    detail: 'Entropy, 2016 (archived)',
    url: 'https://web.archive.org/web/20220516061002/https://entropymag.org/a-guidebook-from-oblivion-review-of-leif-havens-arcane-rituals-from-the-future/',
  },
];

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div>
      {entries.map((entry) => {
        const inner = (
          <div style={{ padding: '16px 0' }}>
            <div
              className="group-hover:opacity-60 transition-opacity duration-200"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                color: 'var(--text-primary)',
                marginBottom: '4px',
                lineHeight: 1.5,
              }}
            >
              {entry.title}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
              {entry.detail}
            </div>
          </div>
        );
        return entry.url ? (
          <a
            key={entry.title}
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            {inner}
          </a>
        ) : (
          <div key={entry.title} style={{ borderBottom: '1px solid var(--border)' }}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export function WritingPage() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '36px',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: '24px',
          color: 'var(--text-primary)',
        }}
      >
        Writing
      </h1>

      <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '58ch', marginBottom: '64px' }}>
        I write and publish as Leif Haven — poetry, criticism, and essays.
        Before design, I edited the poetry press Persistent Editions and wrote
        journalism for Eater, SF Weekly, and Sprudge.
      </p>

      {/* Book */}
      <section style={{ marginBottom: '80px' }}>
        <SectionLabel>Book</SectionLabel>
        <a
          href="https://www.journal1913.org/publications/arcane-rituals-from-the-future/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div
            className="group-hover:opacity-60 transition-opacity duration-200"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}
          >
            <em>Arcane Rituals from the Future</em>
          </div>
        </a>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginBottom: '12px' }}>
          1913 Press, 2016
        </div>
        <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '58ch' }}>
          Winner of the 1913 Prize for First Books, selected by Claudia Rankine.
        </p>
      </section>

      {/* Chapbooks */}
      <section style={{ marginBottom: '80px' }}>
        <SectionLabel>Chapbooks</SectionLabel>
        <EntryList entries={chapbooks} />
      </section>

      {/* In journals */}
      <section style={{ marginBottom: '80px' }}>
        <SectionLabel>In Journals</SectionLabel>
        <EntryList entries={inJournals} />
        <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--text-tertiary)', maxWidth: '58ch', marginTop: '24px' }}>
          Also in Fence, PANK, Hobart, SAND, Court Green, Columbia Poetry
          Review, 1913: A Journal of Forms, Noö Journal, Tagvverk, Out of
          Nothing, Banango Street, elimae, and others.
        </p>
      </section>

      {/* Essays & criticism */}
      <section style={{ marginBottom: '80px' }}>
        <SectionLabel>Essays & Criticism</SectionLabel>
        <EntryList entries={essays} />
      </section>

      {/* Press */}
      <section>
        <SectionLabel>Press</SectionLabel>
        <EntryList entries={press} />
      </section>
    </div>
  );
}
