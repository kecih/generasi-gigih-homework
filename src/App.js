import './App.css';
import PageHeading from "../src/components/PageHeading"
import DataLoop from './components/DataLoop';

function App() {
  return <div className="App">
    <PageHeading text="Create Playlist" />
    <DataLoop />
  </div>
}
export default App;