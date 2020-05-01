import React from 'react';
import SearchForm from './SearchForm';
import StoryList from './StoryList';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      searchTerm: 'react',
      stories: []
    }
    this.setSearchForm = this.setSearchForm.bind(this);
    this.getStories= this.getStories.bind(this);
  }

  componentDidMount() {
    this.getStories()
  }

  async getStories(){
    const response = await axios.get(`
    https://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}
    `);

    this.setState({stories: response.data.hits});
  }

  setSearchForm(formTerm){
    this.setState({searchTerm: formTerm}, this.getStories);
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <SearchForm setSearchForm={this.setSearchForm}/>
        <StoryList stories={this.state.stories}/>
      </div>
    )
  }
}

export default App;
