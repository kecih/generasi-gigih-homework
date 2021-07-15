import './App.css';
import data from './data'
import CreatePlaylist from './components/CreatePlaylist';
import PageHeading from './components/PageHeading';
import SongAlbum from './components/SongAlbum';
import SongArtist from './components/SongArtist';
import SongImage from './components/SongImage';
import SongTitle from './components/SongTitle';
import Button from './components/Button';

function App() {
return (
<div className="App">
  <PageHeading text="Create Playlist"/>
  <SongImage imageUrl={data.album.images[0].url}/>
  <SongTitle titleName={data.name}/>
  <SongArtist artistName={data.artists[0].name}/>
  <SongAlbum albumName={data.album.name}/>
  <Button value="Select"/>
  {/* <CreatePlaylist /> */}
</div>
);
}
export default App;
// TANYA TENTANG PENAMAAN PROPS APAKAH BOLEH BEBAS ATAU SESUAI
// CONTEXT ATAU GIMANA?