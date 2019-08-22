'use strict';

let React = require('react');
import FormattedDate from './formatted-date';

export default function ActivityCard(props) {
  
  let title = ''
  let bodyText = ''
  let author = false
  let link = false

  if (!props.item.content && props.item.note) {
    const markdown = props.item.note

    if ((markdown.match(/\*\*/g) || []).length == 2) {
      title = markdown.substring(markdown.indexOf('**')+2, markdown.lastIndexOf('**'))
    } else {
      title = 'Untitled Card'
    }

    if ((markdown.match(/_/g) || []).length == 2) {
      author = markdown.substring(markdown.indexOf('_')+1, markdown.lastIndexOf('_'))
    }

    const start = markdown.indexOf('[More Information](');
    if (start !== -1) {
      const start = markdown.indexOf('[More Information](');
      link = markdown.substring(start+19, markdown.indexOf(')', start+19))
    }

    if ((markdown.match(/\*\*/g) || []).length == 2 && (markdown.match(/_/g) || []).length >= 2) {
      bodyText = markdown.substring(markdown.lastIndexOf('**')+2, markdown.indexOf('_')).trim()
    } else {
      bodyText = markdown
    }

  } else if (props.item.content) {
    title = props.item.content.title
    bodyText = props.item.content.body
    author = props.item.content.assignee || props.item.creator.login
    link = props.item.content.html_url
  }

  return(
    <div className="roadmap-card">
      <h3>{title}</h3>
      <div className="roadmap-porgress-bar">
        <div className="progress"></div>
        <div className="progress"></div>
        <div className="progress"></div>
        <div className="progress"></div>
      </div>
      {(() => {
        if (author) {
          return (
              <p className="roadmap-author">
                Project lead: {author}
              </p>
          )
        }
      })()}     
      {bodyText}
      {(() => {
        if (link) {
          return (
            <div style={{marginTop: 20+'px'}}>
              <a href={link} target="_blank">
                More Information <img src="/images/icons/rightward-arrow-blue.svg" className="btn-img" />
              </a>     
            </div> 
          )
        }
      })()}     
     
    </div>
  );
}
  