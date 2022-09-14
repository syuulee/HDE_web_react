import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent';
import Portpolio from './component/Portpolio';

const App = () => {

  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <MainContent />
        <Portpolio />
      </main>
    </div>
  );
}

export default App;
