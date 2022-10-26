import './App.css';
import Header from './allComponentsFile/Header/Header';
import Blogs from './allComponentsFile/Blogs/Blogs';
import Main from './allComponentsFile/Main/Main';
  
function App ()
{
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <footer>
        <hr></hr>
        <Blogs className="blogs"></Blogs>
      </footer>
    </div>
  );
}

export default App;
