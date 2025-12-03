import { AutocopilotHeader } from '../components/autocopilot/AutocopilotHeader';
import { AutocopilotHero } from '../components/autocopilot/AutocopilotHero';
import { AutocopilotShowcase } from '../components/autocopilot/AutocopilotShowcase';
import { AutocopilotFooter } from '../components/autocopilot/AutocopilotFooter';

export const Home = () => {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-blue-500/30 transition-colors duration-300">
            <AutocopilotHeader />
            <main>
                <AutocopilotHero />
                <AutocopilotShowcase />
            </main>
            <AutocopilotFooter />
        </div >
    );
};
