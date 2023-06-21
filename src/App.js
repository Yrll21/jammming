import './App.css';
import Headers from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Tracklist from './components/Tracklist/Tracklist'

function App() {
  return (
    <>
      <Headers />
      <SearchBar />
      <div className="main-container">
        <SearchResults />
        <Tracklist />
      </div>
    </>

  );
}

export default App;
