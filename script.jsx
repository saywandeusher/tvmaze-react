class Result extends React.Component {
  render() {
    return (
      <div className="result" style={{'display': 'inline-block'}}>
        <img src={this.props.img}/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

class ResultsTable extends React.Component {
  render() {
    let searchResults = this.props.keyWord.map((result, index) => (
      <Result key={index} name={result.show.name} img={result.show.image.medium} />
    ))
    return(
      <div className="resultsTable">
        {searchResults}
      </div>
    );
  }
} 

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input : "",
      results : false
    }
  }

  inputHandler = (event) => {
    let inputValue = event.target.value;
    this.setState({input:inputValue});
    console.log(inputValue);
  }

  handleClick = () => {
    let searchResults = [];
    let inputValue = this.state.input;
    if (inputValue.length < 1) {
      alert("Please enter a task!");
      return;
    } else {
      for (let i = 0; i < results.length; i++) {
        if(results[i].show.name.toLowerCase().includes(inputValue.toLowerCase())){
          searchResults.push(results[i]);
        }else{
          console.log(inputValue);
          alert("No such title!");
          return;
        }
      }
      this.setState({input: "", results: true, searchValue: searchResults}, ()=>{console.log(this.state)});
    }
  }

  handleSubmit = (event) => {
    this.handleClick();
    event.preventDefault()
  }

  render() {
    let showResults;
    if (this.state.results) {
      showResults = <ResultsTable keyWord={this.state.searchValue} />
    }else{
      showResults = <div><p>Nothing was searched.</p></div>
    }

    return (
      <div className="searchBar">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.inputHandler} value={this.state.input} placeholder="Enter a Movie Title..." />
          <br />
          <button type="button" onClick={this.handleClick}>search</button>
        </form>
        {showResults}
      </div>
    );
  }

}

class Home extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     test: true
  //   }
  // }
  // changeTest = () => {
  //   this.setState({test:!this.state.test}, ()=>{console.log(this.state.test)});
  // }
  render() {
    // const condition = true;
    return (
      <div className="home">
        <h1>TVMaze React</h1>
          <SearchBar /*click={this.changeTest}*/ />
      </div>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);