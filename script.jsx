class Result extends React.Component {
  render() {

  }
}

class ResultsTable extends React.Component {
  render() {

  }
} 

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.changeHandler = this.changeHandler.bind(this);
    this.handleClick = this.handleClick.bind( this );
    this.state = {
      input : "",
      results : false
    }
  }

  inputHandler(event){
    let inputValue = event.target.value;
    this.setState({input:inputValue});
    console.log(this.state.value);
  }

  handleClick(){
    let inputValue = this.state.input;
    if (inputValue.length < 1) {
      alert("Please enter a task!");
    } else {
      this.setState({input: inputValue, results: true})
    }
  }

  render() {
    return (
      <form>
        <input onChange={this.inputHandler} value={this.state.input} placeholder="Enter a Movie Title..." />
        <br />
        <button type="button" onClick={this.props.click}>search</button>
      </form>
    );
  }
}

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      test: true
    }
  }
  changeTest = () => {
    this.setState({test:!this.state.test}, ()=>{console.log(this.state.test)});
  }
  render() {
    const condition = true;
    return (
      <div className="home">
        <h1>TVMaze React</h1>
        <div className="search">
          <SearchBar click={this.changeTest}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);