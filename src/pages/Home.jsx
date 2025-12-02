import { MgxHeader } from '../components/mgx/MgxHeader';
import { MgxHero } from '../components/mgx/MgxHero';
import { MgxShowcase } from '../components/mgx/MgxShowcase';
import { MgxFooter } from '../components/mgx/MgxFooter';

export const Home = () => {
 return (
 <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-blue-500/30 transition-colors duration-300">
 <MgxHeader />
 <main>
 <MgxHero />
 <MgxShowcase />
 </main>
 <MgxFooter />
 </div >
 );
};
