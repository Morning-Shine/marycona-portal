import AppRoutes from 'routes';
import Header from 'components/header';
import Footer from 'components/footer';
import { ShowCatContext } from 'store/context';
import {  useState } from 'react';


function App() {
  const [isShowCat, setIsShowCat] = useState(false);
  return (
    <ShowCatContext.Provider value={{isShowCat,setIsShowCat }}>
      <div
        className={`h-screen max-h-screen
          grid grid-cols-1 grid-rows-[96px_1fr_44px]
        dark:bg-slate-800 text-slate-950 dark:text-slate-50`}
      >
        <Header />
        <AppRoutes />
        <Footer />
      </div>
     </ShowCatContext.Provider>
  );
}

export default App;
