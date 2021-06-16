import React, { Component } from 'react';


class SuperheroCreateForm extends Component {
   constructor(props) {
      super()
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.props);

   }

   render() {
      return (
         <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Superhero Name</label>
            <input type='text' name='Name' onChange={this.handleChange} value={this.props.hero.name}></input>
            <input type='text' name='priAbility' onChange={this.handleChange} value={this.props.hero.priAbility}></input>
            <input type='text' name='secAbility' onChange={this.handleChange} value={this.props.hero.secAbility}></input>
            <input type='submit' value='Add Hero'></input>
         </form>
      )
   }
}

export default SuperheroCreateForm;
