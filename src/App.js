import './App.css';
import BottomLinkDiv from './Components/BottomLinkDiv';
import Footer from './Components/Footer';
import LinksContainer from './Components/LinksContainer';
import ProfileSection from './Components/ProfileSection';

function App() {
  return (
    <div className="App">
      <ProfileSection></ProfileSection>
      <LinksContainer></LinksContainer>
      <BottomLinkDiv></BottomLinkDiv>
      <Footer></Footer>
    </div>
  );
}

export default App;
