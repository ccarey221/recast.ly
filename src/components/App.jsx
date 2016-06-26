class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0],
      query: 'silly cats'
    };

  }

  onVideoClick(newVideo) {
    this.setState({
      video: newVideo 
    });
  }

  onSuccess(items) {
    this.setState({
      videos: items,
      video: items[0]
    });
  }

  onSearch(e) {
    this.props.source({key: window.YOUTUBE_API_KEY, q: e, maxResults: 5}, this.onSuccess.bind(this));
  }

  componentDidMount () {
    this.props.source({key: window.YOUTUBE_API_KEY, q: this.state.query, maxResults: 5}, this.onSuccess.bind(this));
  }

  render() {
    return (
      <div>
        <Nav search={this.onSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} click={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
