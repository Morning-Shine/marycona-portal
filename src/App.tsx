import AppRoutes from 'routes';
import Header from 'components/header';

function App() {
  return (
    <div className={`dark:bg-gray-800`}>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
