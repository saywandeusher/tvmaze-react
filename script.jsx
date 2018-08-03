class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

  render() {
    return (
      <div className="home">
        <h1>TVMaze React</h1>
        <div className="search">
          <SearchBar />
        </div>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter a Movie Title..." />
        <br />
        <button type="submit">search</button>
      </form>
    );
  }
}

class ResultsTable extends React.Component {
  render() {

  }
} 

class Result extends React.Component {
  render() {

  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);