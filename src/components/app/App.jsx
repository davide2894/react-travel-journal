import './App.scss';
import Header from '../navbar/Header';
import travelEntriesData from '../../data/data';
import Entry from '../entry/Entry';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="entries">
        {travelEntriesData.map((entryData) => {
          
          return <Entry 
            key={entryData.id}
            entryData={entryData}
          />
        })}
      </section>
    </div>
  );
}

export default App;
