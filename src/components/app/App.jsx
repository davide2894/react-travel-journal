import './App.scss';
import Header from '../navbar/Header';
import travelEntriesData from '../../data/data';
import Entry from '../entry/Entry';

function App() {
  return (
    <div className="App">
      <Header/>
      {travelEntriesData.map((entryData) => {
        console.log(<Entry/>);
        return <Entry 
          key={entryData.id}
          entryData={entryData}
        />
      })}
    </div>
  );
}

export default App;
