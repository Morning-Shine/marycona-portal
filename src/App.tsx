import AppRoutes from 'routes';
import Header from 'components/header';
import Footer from 'components/footer';

function App() {
  return (
    <div className={`h-screen flex flex-col justify-between
    dark:bg-slate-800 text-slate-950 dark:text-slate-50`}>
      <Header />
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;
