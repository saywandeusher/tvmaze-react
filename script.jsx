class Result extends React.Component {
  render() {

  }
}

class ResultsTable extends React.Component {
  render() {
    return(
      <div className="resultsTable">
        <h1>Your results!</h1>
      </div>
    );
  }
} 

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.inputHandler = this.inputHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      input : "",
      results : false
    }
  }

  inputHandler(event){
    let inputValue = event.target.value;
    this.setState({input:inputValue});
    console.log(inputValue);
  }

  handleClick(){
    let inputValue = this.state.input;
    if (inputValue.length < 1) {
      alert("Please enter a task!");
      return;
    } else {
      this.setState({input: inputValue, results: true}, ()=>{console.log(this.state)});
    }
  }

  render() {
    let showResults;
    if (this.state.results) {
      showResults = <ResultsTable />
    }else{
      showResults = <div><p>Nothing was searched.</p></div>
    }

    return (
      <div className="search">
        <form>
          <input onChange={this.inputHandler} value={this.state.input} onSubmit={this.handleClick} placeholder="Enter a Movie Title..." />
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