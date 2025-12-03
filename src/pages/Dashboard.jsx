import React, { useState } from 'react';
import { DashboardLayout } from '../components/dashboard/layout/DashboardLayout';
import { Overview } from '../components/dashboard/sections/Overview';
import { AdoSetup } from '../components/dashboard/sections/AdoSetup';
import { AgentActivity } from '../components/dashboard/sections/AgentActivity';
import { BuildTimeline } from '../components/dashboard/sections/BuildTimeline';
import { CodeViewer } from '../components/dashboard/sections/CodeViewer';
import { TestReports } from '../components/dashboard/sections/TestReports';
import { LogsEvents } from '../components/dashboard/sections/LogsEvents';
import { Settings } from '../components/dashboard/sections/Settings';

export const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const renderSection = () => {
        switch (activeSection) {
            case 'overview': return <Overview />;
            case 'ado-setup': return <AdoSetup />;
            case 'agent-activity': return <AgentActivity />;
            case 'build-timeline': return <BuildTimeline />;
            case 'code-viewer': return <CodeViewer />;
            case 'test-reports': return <TestReports />;
            case 'logs': return <LogsEvents />;
            case 'settings': return <Settings />;
            default: return <Overview />;
        }
    };

    return (
        <DashboardLayout activeSection={activeSection} onNavigate={setActiveSection}>
            {renderSection()}
        </DashboardLayout>
    );
};
