import './App.css';
import Header from './allComponentsFile/Header/Header';
import Blogs from './allComponentsFile/Blogs/Blogs';

function App ()
{
  return (
    <div className="App">
      <Header></Header>
      <footer>
        <hr></hr>
        <Blogs className="blogs"></Blogs>
      </footer>
    </div>
  );
}

export default App;
