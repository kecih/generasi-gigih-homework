import './App.css';
import PageHeading from "../src/components/PageHeading"
import {spotifyLogin, getAccessToken} from './auth/auth'
import Search from './pages/Search/Search';

function App() {
  return <div className="App">
    <PageHeading spotifyLogin={spotifyLogin} />
    <Search getAccessToken={getAccessToken} />
  </div>
}
export default App;