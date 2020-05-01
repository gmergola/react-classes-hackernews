import React from 'react';
import Story from './Story';

class StoryList extends React.Component {

  render(){
    return(
      <ul>
      {this.props.stories.map(story => <li><Story story={story}/></li>)}
      </ul>
    );
  }
}

export default StoryList;