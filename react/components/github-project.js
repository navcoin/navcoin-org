'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
import ActivityCard  from './lib/activity-card';

class GitHubProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      planning: [],
      inProgress: [],
      testing: [],
      completed: [],
      closed: []
    };
  }

  componentDidMount() {

    const projectActivity = this;

    const options =  {
      method: 'get',
      headers: new Headers({
        'Accept': '  application/vnd.github.inertia-preview+json',
        'Authorization': 'Bearer 86c63aaf15b309c27745ae6cfad2af4f9a8c2f2c'
      })
    }

    fetch("https://api.github.com/projects/columns/5785897/cards", options)
    .then(res => res.json())
    .then((result) => {
      result.forEach((card, index) => {
        if (card.content_url) {
          fetch(card.content_url).then(res => res.json()).then((content) => {
            result[index].content = content
            projectActivity.setState({isLoaded: true, planning: result })
          })
        } else {
          projectActivity.setState({isLoaded: true, planning: result })
        }
      })
    },(error) => projectActivity.setState({isLoaded: true, error }))
    
    fetch("https://api.github.com/projects/columns/5785898/cards", options)
    .then(res => res.json())
    .then((result) => {
      result.forEach((card, index) => {
        if (card.content_url) {
          fetch(card.content_url).then(res => res.json()).then((content) => {
            result[index].content = content
            projectActivity.setState({isLoaded: true, inProgress: result })
          })
        } else {
          projectActivity.setState({isLoaded: true, inProgress: result })
        }
      })
    },(error) => projectActivity.setState({isLoaded: true, error }))
    
    fetch("https://api.github.com/projects/columns/5785899/cards", options)
    .then(res => res.json())
    .then((result) => {
      result.forEach((card, index) => {
        if (card.content_url) {
          fetch(card.content_url).then(res => res.json()).then((content) => {
            result[index].content = content
            projectActivity.setState({isLoaded: true, testing: result })
          })
        } else {
          projectActivity.setState({isLoaded: true, testing: result })
        }
      })
    },(error) => projectActivity.setState({isLoaded: true, error }))
    
    fetch("https://api.github.com/projects/columns/5785901/cards", options)
    .then(res => res.json())
    .then((result) => {
      result.forEach((card, index) => {
        if (card.content_url) {
          fetch(card.content_url).then(res => res.json()).then((content) => {
            result[index].content = content
            projectActivity.setState({isLoaded: true, completed: result })
          })
        } else {
          projectActivity.setState({isLoaded: true, completed: result })
        }
      })
    },(error) => projectActivity.setState({isLoaded: true, error }))

  }

  render() {
    const { error, isLoaded, planning, inProgress, testing, completed, closed } = this.state;
    if (error) {
      return (
        <div className="status-container">
          <h3>Something went wrong</h3>
          <p>We were unable to fetch the project activity from GitHub, you can try viewing it directly on the the NavCoin Core GitHub Project.</p>
          <a href="https://github.com/orgs/navcoin/projects/3">GitHub Project &nbsp;&nbsp;
                <span className="fa fa-chevron-right"></span>
            </a>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="status-container">
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <div className="roadmap-grid-container" style={{maxWidth: 1190+'px'}}>
            {(() => {
              if(planning.length > 0) {
                return(
                  <div className="roadmap-session up-coming">
                    <img src="/images/roadmap/map-up-coming.svg"/>
                    <h3>Upcoming</h3>
                    {planning.map((value, index) => {
                      return <ActivityCard key={index.toString()} item={value} />
                    })}     
                  </div>
                )
              }            
            })()}
            {(() => {
              if(inProgress.length > 0) {
                return(
                  <div className="roadmap-session in-progress">
                    <img src="/images/roadmap/map-in-progress.svg"/>
                    <h3>In Progress</h3>
                    {inProgress.map((value, index) => {
                      return <ActivityCard key={index.toString()} item={value} />
                    })} 
                  </div>
                )
              }            
            })()}
            {(() => {
              if(testing.length > 0) {
                return(
                  <div className="roadmap-session beta">
                    <img src="/images/roadmap/map-beta.svg"/>
                    <h3>Beta Testing</h3>
                    {testing.map((value, index) => {
                      return <ActivityCard key={index.toString()} item={value} />
                    })} 
                  </div>
                )
              }            
            })()}
          
          </div>
          <div className="roadmap-complete">
            <img src="/images/roadmap/map-completed.svg"/>
            <h3>Completed</h3>
            <div className="roadmap-grid-container" style={{maxWidth: 1190+'px'}}>
              {completed.map((value, index) => {
                return <ActivityCard key={index.toString()} item={value} />
              })} 
            </div>
          </div>
         
        </div>
      );
    }
  }
}

const domContainer = document.querySelector('#react-project-activity');
ReactDOM.render(React.createElement(GitHubProject), domContainer);