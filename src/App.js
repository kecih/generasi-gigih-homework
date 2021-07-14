import Button from "./components/Button"
import Input from "./components/Input"
import Gifs from "./components/Gifs"
import gifData from "./data/gifData"

function App() {
  return (
    <div>
      <Input/>
      <Button/>
      <Gifs url={gifData.url} title={gifData.title}/>
    </div>
  );
}

export default App;
