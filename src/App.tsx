import { useEffect, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  CirclePlay,
  ExternalLink,
  FlaskConical,
  Lightbulb,
  Menu,
  MousePointer2,
  Play,
  Puzzle,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import qrBookCover from './assets/1_1786687294781.png';
import bookCover from './assets/BookCover_1786686509171.png';
import brainActivity from './assets/2_2_1786686426090.png';
import sensesActivity from './assets/2_3_1786686426090.png';
import hearingActivity from './assets/2_4_1786686426091.png';
import tasteActivity from './assets/2_5_1786686426091.png';
import touchActivity from './assets/2_6_1786686426091.png';
import smellActivity from './assets/2_7_1786686426091.png';
import sightActivity from './assets/2_8_1786686426091.png';
import bipolarActivity from './assets/2_9_1786686426091.png';
import multipolarActivity from './assets/2_11_1786686426092.png';
import neuronActivity from './assets/4_1786686426092.png';
import newTasteActivity from './assets/2_copy_1786688622918.png';
import mazeActivity from './assets/7_copy_1786688622919.png';
import missingWordsActivity from './assets/8_copy_1786688622919.png';
import neuronColoringActivity from './assets/11_1786782920679.jpeg';
import newBipolarActivity from './assets/Bipolar_Neuron_-_Activity_Book_1786688622920.png';
import newBrainActivity from './assets/Brain_-_Activity_Book_1786688622920.png';
import newMultipolarActivity from './assets/Multipolar_Neuron_-_Activity_Book_1786688622921.png';
import newSightActivity from './assets/Sight-_Activity_Book_1786688622921.png';
import newSmellActivity from './assets/Smell_-_Activity_Book_1786688622921.png';
import unipolarActivity from './assets/Unipolar_Neuron_-_Activity_Book_1786688622921.png';

const AMAZON_URL = 'https://www.amazon.com/dp/B0HCL8TGMW';
const YOUTUBE_URL = 'https://www.youtube.com/playlist?list=PLdBx7fAyZDps';

const activities = [
  { title: 'Map the brain', label: 'Labeling exercise', image: newBrainActivity, color: '#e6f2ec' },
  { title: 'Taste detectives', label: 'Labeling exercise', image: newTasteActivity, color: '#fff0d0' },
  { title: 'Find the sound', label: 'Maze activity', image: mazeActivity, color: '#fbe0d7' },
  { title: 'What’s missing?', label: 'Word puzzle', image: missingWordsActivity, color: '#e4eef8' },
  { title: 'Color a neuron', label: 'Coloring exercise', image: neuronColoringActivity, color: '#eee5f7' },
  { title: 'Meet a bipolar neuron', label: 'Labeling exercise', image: newBipolarActivity, color: '#fbe7c2' },
  { title: 'The sight pathway', label: 'Labeling exercise', image: newSightActivity, color: '#e7f0d5' },
  { title: 'Follow a smell', label: 'Visual puzzle', image: newSmellActivity, color: '#f7dfed' },
  { title: 'Neurons have shapes', label: 'Compare + label', image: newMultipolarActivity, color: '#e1eef0' },
  { title: 'Explore a unipolar neuron', label: 'Coloring + labeling', image: unipolarActivity, color: '#e7e5f7' },
];

const videoGuides = [
  { title: 'The brain', image: brainActivity },
  { title: 'The senses', image: sensesActivity },
  { title: 'Hearing', image: hearingActivity },
  { title: 'Touch', image: touchActivity },
  { title: 'Smell', image: smellActivity },
  { title: 'Sight', image: sightActivity },
];

const faqs = [
  {
    question: 'Who is the book for?',
    answer: 'The Brain is for curious learners, families, classrooms, and anyone ready to explore how the brain and senses work. Children can use the activities independently or with an adult, and grown-ups can join in too.',
  },
  {
    question: 'Is it scientifically reliable?',
    answer: 'Yes. The project is built by an interdisciplinary team across neuroscience, medicine, education, illustration, and science communication. It is proofread and scientifically reviewed by an MD, PhD physician and neuroscientist.',
  },
  {
    question: 'What kind of activities are inside?',
    answer: 'Labeling exercises, word searches, crosswords, mazes, coloring pages, missing-part activities, and visual puzzles. Every chapter invites children to do something with what they are learning.',
  },
  {
    question: 'How do the companion videos work?',
    answer: 'Short, friendly chapter guides are linked by QR codes inside the book. Scan one to meet the topic, get a little help with the first activity, and keep exploring at your own pace.',
  },
  {
    question: 'Can I use it in a classroom or homeschool setting?',
    answer: 'Absolutely. The single book works as an independent activity book, a calm science-center invitation, or a springboard for conversations about the brain, body, and senses.',
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>{children}</div>;
}

function AmazonButton({ children, className = '', testId }: { children: ReactNode; className?: string; testId: string }) {
  return (
    <a data-testid={testId} className={`btn-primary ${className}`} href={AMAZON_URL} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight size={17} strokeWidth={2.5} />
    </a>
  );
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState(0);

  const goTo = () => setMenuOpen(false);

  return (
    <div className="site-wrap bg-[#fff7e7]">
      <header className="sticky top-0 z-40 border-b border-[#dacfae] bg-[#fff7e7]/95 backdrop-blur-md">
        <div className="container-wide flex h-[72px] items-center justify-between">
          <a data-testid="link-home" href="#top" className="flex items-center gap-2.5" onClick={goTo}>
            <span className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#0e706e] text-[#fff7e7] shadow-[3px_3px_0_#f0b84f]"><Brain size={21} /></span>
            <span className="display text-[16px] font-extrabold leading-[.9] tracking-[-.04em] text-[#17324d]">THE<br /><span className="text-[#ef604c]">BRAIN</span></span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <a data-testid="link-why" className="nav-link" href="#inside">Inside the book</a>
            <a data-testid="link-activities" className="nav-link" href="#activities">Activities</a>
            <a data-testid="link-videos" className="nav-link" href="#videos">Companion videos</a>
            <a data-testid="link-trust" className="nav-link" href="#trust">For grown-ups</a>
          </nav>
          <div className="hidden md:block"><AmazonButton testId="link-nav-amazon">Get the book</AmazonButton></div>
          <button data-testid="button-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-[#dacfae] text-[#17324d] md:hidden">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu border-t border-[#dacfae] bg-[#fff7e7] px-5 pb-5 pt-3 md:hidden" aria-label="Mobile navigation">
            <a data-testid="link-mobile-inside" className="block border-b border-[#dacfae] py-3 font-semibold" href="#inside" onClick={goTo}>Inside the book</a>
            <a data-testid="link-mobile-activities" className="block border-b border-[#dacfae] py-3 font-semibold" href="#activities" onClick={goTo}>Activities</a>
            <a data-testid="link-mobile-videos" className="block border-b border-[#dacfae] py-3 font-semibold" href="#videos" onClick={goTo}>Companion videos</a>
            <a data-testid="link-mobile-trust" className="block py-3 font-semibold" href="#trust" onClick={goTo}>For grown-ups</a>
            <AmazonButton testId="link-mobile-amazon" className="mt-2 w-full">Bring curiosity home</AmazonButton>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="grain relative overflow-hidden bg-[#bfe5dc]">
          <div className="container-wide relative grid min-h-[660px] items-center gap-12 pb-16 pt-14 md:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] md:pb-20 md:pt-20">
            <div className="relative z-10 min-w-0">
              <Reveal><div className="eyebrow mb-5 flex items-center gap-2 text-[#0e706e]"><Sparkles size={14} /> A first look at neuroscience</div></Reveal>
              <Reveal delay={1}><h1 className="hero-title display max-w-[670px] text-[clamp(3.2rem,8vw,7.2rem)] font-extrabold leading-[.86] tracking-[-.075em] text-[#17324d]">Big questions.<br /><span className="text-[#ef604c]">Brilliant</span> brains.</h1></Reveal>
              <Reveal delay={2}><p className="mt-7 max-w-[490px] text-[18px] leading-[1.5] text-[#17324d]/80">The Brain is a colorful activity book for curious kids who want to know what makes us think, sense, learn, and wonder.</p></Reveal>
              <Reveal delay={3}><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><AmazonButton testId="link-hero-amazon">Open the book on Amazon</AmazonButton><a data-testid="link-hero-inside" className="btn-ghost" href="#inside">Take a peek <ArrowDown size={16} /></a></div></Reveal>
              <Reveal delay={3}><div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[12px] font-semibold text-[#17324d]/65"><span className="flex items-center gap-2"><ShieldCheck size={17} className="text-[#0e706e]" /> Scientifically reviewed</span><span className="flex items-center gap-2"><BookOpen size={17} className="text-[#ef604c]" /> Curious learners</span><span className="flex items-center gap-2"><QrCode size={17} className="text-[#a077bd]" /> QR video guides</span></div></Reveal>
            </div>
            <Reveal delay={2} className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -right-3 top-4 h-[90%] w-[86%] rotate-[7deg] rounded-[24px] bg-[#f4bf4f] md:right-2" />
              <div className="absolute -left-5 bottom-9 h-14 w-14 rounded-full bg-[#ef604c] md:-left-10"><span className="absolute left-4 top-3 h-5 w-5 rounded-full border-2 border-[#fff7e7]" /></div>
               <div className="relative mx-auto w-[78%] rotate-[3deg] overflow-hidden rounded-[14px] bg-[#17324d] paper-shadow float-book"><img data-testid="img-hero-book-cover" src={qrBookCover} alt="The Brain: Neuroscience for Kids activity book cover with a QR code for companion videos" className="block aspect-[.705] w-full object-cover" /></div>
              <div className="absolute -bottom-3 right-0 max-w-[185px] rotate-[-6deg] rounded-[12px] border-2 border-[#17324d] bg-[#fff7e7] px-4 py-3 text-[12px] font-semibold leading-[1.2] text-[#17324d] shadow-[4px_4px_0_#17324d]">A book to scribble in, solve, and come back to.</div>
            </Reveal>
          </div>
          <div className="pointer-events-none absolute -bottom-10 left-[7%] h-28 w-28 rounded-full border-[18px] border-[#ef604c]/70" />
          <div className="pointer-events-none absolute right-[9%] top-[12%] h-4 w-4 rounded-full bg-[#a077bd] float-dot" />
        </section>

        <section id="inside" className="scroll-mt-20 bg-[#fff7e7] py-24 md:py-32">
          <div className="container-wide grid items-center gap-14 md:grid-cols-[.8fr_1.2fr]">
            <Reveal className="relative">
              <div className="absolute -left-7 -top-7 h-20 w-20 rounded-full border-[11px] border-[#f4bf4f]" />
              <div className="relative mx-auto max-w-[390px] overflow-hidden rounded-[20px] border-[8px] border-[#17324d] shadow-[12px_12px_0_#0e706e]"><img data-testid="img-inside-book-cover" src={bookCover} alt="The Brain book cover with children exploring a friendly brain" className="block w-full" /></div>
              <div className="absolute -bottom-7 -right-2 flex items-center gap-2 rounded-full bg-[#ef604c] px-4 py-3 text-[12px] font-bold text-[#fff7e7] shadow-[4px_4px_0_#17324d]"><FlaskConical size={17} /> Play is a learning strategy</div>
            </Reveal>
            <div>
              <Reveal><div className="eyebrow mb-4">One book. Many doorways.</div></Reveal>
              <Reveal delay={1}><h2 className="display max-w-[630px] text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[.92] tracking-[-.065em] text-[#17324d]">Meet the brain<br /><span className="text-[#0e706e]">without the lecture.</span></h2></Reveal>
              <Reveal delay={2}><p className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-[#17324d]/72">The Brain turns big ideas into small discoveries. Children label a lobe, trace a signal, decode a sense, and start seeing their own bodies as a brilliant science story.</p></Reveal>
              <Reveal delay={3}><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-[16px] border border-[#dacfae] bg-[#fff0d0] p-5"><Brain className="mb-4 text-[#ef604c]" size={25} /><h3 className="font-bold text-[#17324d]">Accurate, not clinical</h3><p className="mt-2 text-sm leading-[1.5] text-[#17324d]/65">Clear explanations keep the wonder and leave the jargon at the door.</p></div><div className="rounded-[16px] border border-[#dacfae] bg-[#e7f1ef] p-5"><Puzzle className="mb-4 text-[#0e706e]" size={25} /><h3 className="font-bold text-[#17324d]">Active, not passive</h3><p className="mt-2 text-sm leading-[1.5] text-[#17324d]/65">Solve, compare, color, and connect each idea to the next.</p></div></div></Reveal>
            </div>
          </div>
        </section>

        <section id="activities" className="scroll-mt-20 border-y border-[#dacfae] bg-[#f4bf4f] py-24 md:py-28">
          <div className="container-wide">
            <Reveal><div className="eyebrow text-[#17324d]">A flip-through, in full color</div></Reveal>
             <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end"><Reveal delay={1}><h2 className="display max-w-[650px] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#17324d]">Every page says:<br /><span className="text-[#ef604c]">try it yourself.</span></h2></Reveal><Reveal delay={2}><p className="max-w-[310px] text-sm leading-[1.55] text-[#17324d]/75">A preview of the hands-on pages inside — from labeling and puzzles to a few coloring exercises, all designed for pencils, pauses, and “wait, really?” moments.</p></Reveal></div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {activities.map((activity, index) => (
                <Reveal key={activity.title} delay={(index % 3) + 1}>
                  <button data-testid={`button-activity-${index}`} onClick={() => setActiveActivity(index)} className="activity-card group block w-full text-left" style={{ backgroundColor: activity.color }}>
                    <div className="relative aspect-[.705] overflow-hidden rounded-[14px] bg-[#fff7e7]"><img data-testid={`img-activity-${index}`} src={activity.image} alt={`${activity.title} activity page preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" /><span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-[#fff7e7]/90 text-[#17324d] opacity-0 transition-opacity group-hover:opacity-100"><Search size={15} /></span></div>
                    <p className="mt-3 text-[13px] font-bold leading-tight text-[#17324d]">{activity.title}</p><p className="mt-1 text-[10px] font-medium uppercase tracking-[.08em] text-[#17324d]/55">{activity.label}</p>
                  </button>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-9 flex justify-center"><a data-testid="link-activities-amazon" className="btn-primary bg-[#17324d] text-[#fff7e7] hover:bg-[#0e706e]" href={AMAZON_URL} target="_blank" rel="noreferrer">See the whole activity book <ArrowUpRight size={17} /></a></Reveal>
          </div>
        </section>

        <section id="videos" className="scroll-mt-20 bg-[#17324d] py-24 text-[#fff7e7] md:py-32">
          <div className="container-wide grid items-center gap-12 md:grid-cols-[1fr_1.05fr]">
            <div>
              <Reveal><div className="eyebrow text-[#f4bf4f]"><QrCode size={14} className="mr-2 inline" /> Scan. Watch. Wonder.</div></Reveal>
              <Reveal delay={1}><h2 className="display mt-4 max-w-[580px] text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[.9] tracking-[-.07em]">The page<br />can <span className="text-[#f4bf4f]">talk back.</span></h2></Reveal>
              <Reveal delay={2}><p className="mt-6 max-w-[470px] text-[17px] leading-[1.6] text-[#fff7e7]/70">Inside the book, QR codes open short companion videos for each chapter. Friendly guides introduce the first activity, explain the idea, and let kids take the next step when they are ready.</p></Reveal>
              <Reveal delay={3}><a data-testid="link-youtube-playlist" className="btn-primary mt-8 bg-[#ef604c] text-[#fff7e7] hover:bg-[#f47a66]" href={YOUTUBE_URL} target="_blank" rel="noreferrer"><CirclePlay size={18} fill="currentColor" /> Watch the companion playlist <ExternalLink size={15} /></a></Reveal>
            </div>
            <Reveal delay={2} className="relative">
              <div className="absolute -right-4 -top-5 h-20 w-20 rounded-full border-2 border-[#f4bf4f]/50" />
              <div className="relative overflow-hidden rounded-[22px] border border-[#fff7e7]/20 bg-[#225267] p-5 shadow-[9px_9px_0_#ef604c]">
                <div className="flex items-center justify-between border-b border-[#fff7e7]/15 pb-4"><span className="mono text-[10px] uppercase tracking-[.16em] text-[#bfe5dc]">chapter guides / 01—09</span><span className="rounded-full bg-[#f4bf4f] px-3 py-1 text-[10px] font-bold text-[#17324d]">QR inside</span></div>
                <div className="grid grid-cols-3 gap-3 py-5">
                  {videoGuides.map((guide, index) => (
                    <a
                      key={guide.title}
                      data-testid={`link-video-guide-${index}`}
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[12px] bg-[#17324d] p-2.5"
                      aria-label={`Watch the ${guide.title} companion video playlist`}
                    >
                      <div className="relative aspect-[1.12] overflow-hidden rounded-[8px] bg-[#bfe5dc]">
                        <img
                          data-testid={`img-video-thumbnail-${index}`}
                          src={guide.image}
                          alt={`${guide.title} activity page from the companion video guide`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                        />
                        <span className="absolute inset-0 grid place-items-center bg-[#17324d]/15 transition-colors group-hover:bg-[#ef604c]/80">
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#fff7e7] text-[#ef604c] shadow-[3px_3px_0_#17324d]">
                            <Play size={15} fill="currentColor" />
                          </span>
                        </span>
                      </div>
                      <p className="mt-2 flex items-center justify-between gap-2 text-[10px] font-semibold text-[#fff7e7]/80">
                        {guide.title}
                        <ExternalLink size={11} className="shrink-0 text-[#f4bf4f]" />
                      </p>
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-3 rounded-[12px] bg-[#fff7e7]/10 p-3 text-[12px] text-[#fff7e7]/70"><Lightbulb size={18} className="shrink-0 text-[#f4bf4f]" /><span>Short enough for a curious afternoon. Friendly enough to watch together.</span></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="trust" className="scroll-mt-20 bg-[#e7f1ef] py-24 md:py-32">
          <div className="container-wide">
            <div className="grid gap-12 md:grid-cols-[.95fr_1.05fr] md:items-end">
              <div><Reveal><div className="eyebrow">Made with care, checked with rigor</div></Reveal><Reveal delay={1}><h2 className="display mt-4 text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#17324d]">Wonder needs<br /><span className="text-[#0e706e]">good guardrails.</span></h2></Reveal></div>
              <Reveal delay={2}><p className="max-w-[510px] text-[17px] leading-[1.65] text-[#17324d]/72">This is a small interdisciplinary team at the intersection of neuroscience, medicine, education, illustration, and science communication. We believe accurate science can still feel playful, visual, and welcoming.</p></Reveal>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              <Reveal><div className="h-full rounded-[20px] border border-[#b9d7d2] bg-[#fff7e7] p-7"><div className="mb-10 grid h-12 w-12 place-items-center rounded-[15px] bg-[#0e706e] text-[#fff7e7]"><ShieldCheck size={23} /></div><p className="mono text-[11px] uppercase tracking-[.14em] text-[#0e706e]">01 / Scientific review</p><h3 className="display mt-3 text-2xl font-bold text-[#17324d]">Correct first.<br />Always.</h3><p className="mt-4 text-sm leading-[1.55] text-[#17324d]/65">Proofread and scientifically reviewed by an MD, PhD physician and neuroscientist.</p></div></Reveal>
              <Reveal delay={1}><div className="h-full rounded-[20px] border border-[#b9d7d2] bg-[#fff7e7] p-7"><div className="mb-10 grid h-12 w-12 place-items-center rounded-[15px] bg-[#ef604c] text-[#fff7e7]"><FlaskConical size={23} /></div><p className="mono text-[11px] uppercase tracking-[.14em] text-[#ef604c]">02 / Learning by doing</p><h3 className="display mt-3 text-2xl font-bold text-[#17324d]">Hands busy.<br />Ideas stick.</h3><p className="mt-4 text-sm leading-[1.55] text-[#17324d]/65">Matching, coloring, comparing, and solving turn a fact into something a child can remember.</p></div></Reveal>
              <Reveal delay={2}><div className="h-full rounded-[20px] border border-[#b9d7d2] bg-[#fff7e7] p-7"><div className="mb-10 grid h-12 w-12 place-items-center rounded-[15px] bg-[#a077bd] text-[#fff7e7]"><MousePointer2 size={23} /></div><p className="mono text-[11px] uppercase tracking-[.14em] text-[#a077bd]">03 / Built for real life</p><h3 className="display mt-3 text-2xl font-bold text-[#17324d]">Pick it up.<br />Dip back in.</h3><p className="mt-4 text-sm leading-[1.55] text-[#17324d]/65">A welcoming independent activity book for bedrooms, classrooms, kitchen tables, and curious grown-ups.</p></div></Reveal>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 bg-[#fff7e7] py-24 md:py-32">
          <div className="container-wide grid gap-12 md:grid-cols-[.7fr_1.3fr]">
            <div><Reveal><div className="eyebrow">Questions, answered plainly</div></Reveal><Reveal delay={1}><h2 className="display mt-4 text-[clamp(2.5rem,5vw,4.7rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#17324d]">For the<br /><span className="text-[#ef604c]">grown-ups.</span></h2></Reveal><Reveal delay={2}><p className="mt-6 max-w-[310px] text-[16px] leading-[1.6] text-[#17324d]/65">The best learning materials earn trust before they earn a place on the shelf.</p></Reveal></div>
            <Reveal delay={2}><div className="divide-y divide-[#dacfae] border-y border-[#dacfae]">{faqs.map((faq, index) => <div key={faq.question} className={`faq-item ${openFaq === index ? 'open' : ''}`}><button data-testid={`button-faq-${index}`} className="flex w-full items-center justify-between gap-5 py-5 text-left" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span className="text-[17px] font-bold text-[#17324d]">{faq.question}</span><span className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f4bf4f] text-[#17324d]"><span className="text-[22px] font-light leading-none">+</span></span></button><div className="faq-answer"><div><p className="max-w-[640px] pb-5 pr-12 text-[15px] leading-[1.6] text-[#17324d]/65">{faq.answer}</p></div></div></div>)}</div></Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ef604c] py-20 md:py-28">
          <div className="container-wide relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><Reveal><div className="eyebrow text-[#fff7e7]">Your next science adventure</div></Reveal><Reveal delay={1}><h2 className="display mt-4 max-w-[700px] text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[.87] tracking-[-.075em] text-[#fff7e7]">Bring the brain<br /><span className="text-[#f4bf4f]">home.</span></h2></Reveal><Reveal delay={2}><p className="mt-5 max-w-[490px] text-[17px] leading-[1.55] text-[#fff7e7]/80">One colorful book. A whole new way to look at thinking, sensing, and being wonderfully human.</p></Reveal></div><Reveal delay={2}><AmazonButton testId="link-final-amazon" className="bg-[#17324d] text-[#fff7e7] hover:bg-[#0e706e]">Get The Brain on Amazon</AmazonButton></Reveal></div>
          <div className="pointer-events-none absolute -right-10 -top-12 h-64 w-64 rounded-full border-[28px] border-[#f4bf4f]/70" /><div className="pointer-events-none absolute bottom-[-50px] left-[38%] h-48 w-48 rounded-full border-[18px] border-[#fff7e7]/20" />
        </section>
      </main>

      <footer className="bg-[#17324d] py-9 text-[#fff7e7]">
        <div className="container-wide flex flex-col justify-between gap-5 md:flex-row md:items-center"><a data-testid="link-footer-home" href="#top" className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#bfe5dc] text-[#17324d]"><Brain size={18} /></span><span className="display text-[15px] font-bold leading-[.9]">THE <span className="text-[#f4bf4f]">BRAIN</span></span></a><p className="text-[12px] text-[#fff7e7]/55">Neuroscience for Kids · A small team making room for wonder.</p><div className="flex gap-5 text-[12px] font-semibold text-[#fff7e7]/70"><a data-testid="link-footer-amazon" href={AMAZON_URL} target="_blank" rel="noreferrer" className="hover:text-[#f4bf4f]">Amazon <ExternalLink size={12} className="ml-1 inline" /></a><a data-testid="link-footer-youtube" href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:text-[#f4bf4f]">Videos <ExternalLink size={12} className="ml-1 inline" /></a></div></div>
      </footer>

      {activeActivity !== null && (
        <div className="modal-backdrop fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-label={`${activities[activeActivity].title} preview`} onClick={() => setActiveActivity(null)}>
          <div className="relative max-h-[94vh] w-full max-w-[600px] overflow-auto rounded-[20px] bg-[#fff7e7] p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button data-testid="button-close-gallery" onClick={() => setActiveActivity(null)} aria-label="Close preview" className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#17324d] text-[#fff7e7]"><X size={19} /></button>
            <img data-testid="img-gallery-active" src={activities[activeActivity].image} alt={`${activities[activeActivity].title} full activity page`} className="mx-auto max-h-[76vh] w-auto max-w-full rounded-[13px]" />
            <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-4"><div><p className="eyebrow">{activities[activeActivity].label}</p><h3 className="display mt-1 text-2xl font-bold text-[#17324d]">{activities[activeActivity].title}</h3></div><span className="mono text-[11px] text-[#17324d]/45">{activeActivity + 1} / {activities.length}</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

function Router() {
  return <ErrorBoundary resetKey="home"><AppShell /></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={new QueryClient()}><TooltipProvider><Router /><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;