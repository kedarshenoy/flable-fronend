
import './App.css';
import Navbar from './Components/nav';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
      <Navbar></Navbar>
      </RecoilRoot>
    </div>
  );
}

export default App;
