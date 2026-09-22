import React, { useState, useEffect } from 'react';
import { TradingViewAurora3D } from './components/TradingViewAurora3D';
import { TradingViewNavbar } from './components/TradingViewNavbar';
import { TradingViewHero } from './components/TradingViewHero';
import { FeaturedTradeCopier } from './components/FeaturedTradeCopier';
import { TradingViewAiBento } from './components/TradingViewAiBento';
import { TradingViewMarketPulse } from './components/TradingViewMarketPulse';
import { TradingViewSyncCenter } from './components/TradingViewSyncCenter';
import { TradingViewProductMatrix } from './components/TradingViewProductMatrix';
import { TradingViewWhyChoose } from './components/TradingViewWhyChoose';
import { TradingViewOperations } from './components/TradingViewOperations';
import { TradingViewFaq } from './components/TradingViewFaq';
import { TradingViewFooter } from './components/TradingViewFooter';
import { FloatingSupportWidget } from './components/FloatingSupportWidget';

// Subpages
import { AboutUsPage } from './pages/AboutUsPage';
import { AiSoftwarePage } from './pages/AiSoftwarePage';
import { AiWebDevelopmentPage } from './pages/AiWebDevelopmentPage';
import { CustomApplicationsPage } from './pages/CustomApplicationsPage';
import { TradeCopierPage } from './pages/TradeCopierPage';
import { ManualTradeManagerPage } from './pages/ManualTradeManagerPage';
import { TradingAgentPage } from './pages/TradingAgentPage';
import { ProductsPage } from './pages/ProductsPage';
import { PricingPage } from './pages/PricingPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { TradeCopierSetupPage } from './pages/TradeCopierSetupPage';
import { ManualTradeManagerSetupPage } from './pages/ManualTradeManagerSetupPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { RiskDisclaimerPage } from './pages/RiskDisclaimerPage';
import { FontPreviewPage } from './pages/FontPreviewPage';

export function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      // Handle internal relative paths
      if (href.startsWith('/') && !href.startsWith('//') && !href.endsWith('.pdf')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href.split('#')[0] || '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/about-us':
        return <AboutUsPage />;
      case '/ai-software-development':
        return <AiSoftwarePage />;
      case '/ai-web-design-development':
        return <AiWebDevelopmentPage />;
      case '/custom-applications':
        return <CustomApplicationsPage />;
      case '/trade-copier':
        return <TradeCopierPage />;
      case '/manual-trade-manager':
        return <ManualTradeManagerPage />;
      case '/trading-agent':
        return <TradingAgentPage />;
      case '/products':
        return <ProductsPage />;
      case '/pricing':
        return <PricingPage />;
      case '/documentation':
        return <DocumentationPage />;
      case '/documentation/trade-copier-setup':
        return <TradeCopierSetupPage />;
      case '/documentation/manual-trade-manager-setup':
        return <ManualTradeManagerSetupPage />;
      case '/downloads':
        return <DownloadsPage />;
      case '/changelog':
        return <ChangelogPage />;
      case '/support':
        return <SupportPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
      case '/privacy':
        return <PrivacyPolicyPage />;
      case '/terms-of-use':
      case '/terms':
        return <TermsOfUsePage />;
      case '/risk-disclaimer':
      case '/risk':
        return <RiskDisclaimerPage />;
      case '/legal':
        return <LegalPage />;
      case '/font-preview':
        return <FontPreviewPage />;
      default:
        return (
          <main className="flex-1 space-y-6 sm:space-y-10">
            <TradingViewHero />
            <FeaturedTradeCopier />
            <TradingViewAiBento />
            <TradingViewMarketPulse />
            <TradingViewSyncCenter />
            <TradingViewProductMatrix />
            <TradingViewWhyChoose />
            <TradingViewOperations />
            <TradingViewFaq />
          </main>
        );
    }
  };

  return (
    <div className="relative min-h-screen text-[#f7fbff] overflow-x-hidden font-sans selection:bg-[#1da8ff]/30 selection:text-white">
      {/* 1. Official TradingView Space Mission 3D Movable Aurora Background */}
      <TradingViewAurora3D />

      {/* 2. Unified FEF Website */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TradingViewNavbar currentPath={currentPath} />
        {renderPage()}
        <TradingViewFooter />
      </div>

      {/* 3. Floating 24/7 Support Widget (On Every Page) */}
      <FloatingSupportWidget />
    </div>
  );
}

export default App;
