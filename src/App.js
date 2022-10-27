import './App.css';
import Header from './allComponentsFile/Header/Header';
import Blogs from './allComponentsFile/Blogs/Blogs';
import Main from './allComponentsFile/Main/Main';
import FooterComponent from './allComponentsFile/FooterComponent/FooterComponent';
  
function App ()
{
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <footer>
        <hr></hr>
        <Blogs className="blogs"></Blogs>
        <hr></hr>
        <FooterComponent></FooterComponent>
      </footer>
    </div>
  );
}

export default App;
