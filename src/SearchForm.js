// pass in prop of search term
import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.setSearchForm(this.state.formData)
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm ;