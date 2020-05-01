import React from 'react';
import axios from 'axios';
import Story from './Story';

class StoryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stories: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`
    https://hn.algolia.com/api/v1/search?query=${this.props.searchTerm}
    `);
    console.log(this.props.searchTerm);

    this.setState({stories: response.data.hits});
  }


  // async componentDidUpdate() {
  //   const response = await axios.get(`
  //   https://hn.algolia.com/api/v1/search?query=${this.props.searchTerm}
  //   `);

  //   console.log(this.props.searchTerm);

  //   this.setState({stories: response.data.hits});
  // }


  render(){
    return(
      <ul>
      {this.state.stories.map(story => <li><Story story={story}/></li>)}
      </ul>
    );
  }
}

export default StoryList;