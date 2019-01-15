import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  updateText( text ) {
    console.log(this.state.text)
    this.setState({ text: text });
  }

  filterPost (text) {

  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={ ( e ) => this.updateText( e.target.value ) }/>

          <SearchIcon id="Search__icon"/>
        </div>
        
      </section>
    )
  }
}

//npm install -g nodemon