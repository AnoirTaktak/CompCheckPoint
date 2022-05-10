//import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adresse from './component/profile/Adresse';
import ph from './component/profile/photo.jpg';
function App() {
  return (
    <div className="App">
     <ProfilePhoto />
     <FullName />
     <Adresse />
    </div>
  );
}

export default App;
