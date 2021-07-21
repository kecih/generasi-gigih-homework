import './App.css';
import PageHeading from "../src/components/PageHeading"
import Songs from './components/Songs';
import Login from './pages/Login';

function App() {
  return <div className="App">
    {/* <PageHeading text="Create Playlist" /> */}
    {/* <Songs /> */}
    <Login />
  </div>
}
export default App;