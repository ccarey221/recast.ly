class Search extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      input: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.onChange.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.search(this.state.input)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


