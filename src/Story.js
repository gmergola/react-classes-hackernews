import React from 'react';

class Story extends React.Component {
  
  render() {
    return (
      <a href={this.props.story.url}>
        <b>
          {this.props.story.title}
        </b>
      </a>
    );
  }
}

export default Story;