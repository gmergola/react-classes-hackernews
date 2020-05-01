// pass in prop of search term
import React from 'react';
import StoryList from './StoryList';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      formData: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.setState({searchTerm: this.formData})
    this.setState({formData: ''});
  }

  handleChange(evt){
    this.setState({formData: evt.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchTerm">Search Stories</label>
          <input onChange={this.handleChange} value={this.state.formData} name="searchTerm" />
        </form>

        <StoryList searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default SearchForm ;