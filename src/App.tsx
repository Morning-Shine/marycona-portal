'use client';
import AppRoutes from 'routes';
import Header from 'components/header';
import Footer from 'components/footer';
import { ShowCatContext } from 'store/context';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MainSection from 'components/errorBoundaries/MainSection';
import HeaderSection from 'components/errorBoundaries/HeaderSection';

function App() {
  const [isShowCat, setIsShowCat] = useState(false);
  return (
    <ShowCatContext.Provider value={{ isShowCat, setIsShowCat }}>
      <div
        //TODO если добавлять адаптив, убрать min-w
        className={`h-screen max-h-screen min-w-[940px]
          grid grid-cols-1 grid-rows-[96px_1fr_44px]
        dark:bg-slate-800 text-slate-950 dark:text-slate-50`}
      >
        <ErrorBoundary fallback={<HeaderSection />}>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary fallback={<MainSection />}>
          <AppRoutes />
        </ErrorBoundary>
        <Footer />
      </div>
    </ShowCatContext.Provider>
  );
}

export default App;
