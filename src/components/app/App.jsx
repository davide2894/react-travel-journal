import './App.scss';
import Navbar from '../navbar/Navbar';
import travelEntriesData from '../../data/data';
import Entry from '../entry/Entry';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
