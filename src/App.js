import ContentListing from "./components/contentListing/ContentListing";
import Header from "./components/layouts/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper row">
          <Header />
          <ContentListing />
        </div>
      </div>
    </div>
  );
}

export default App;
