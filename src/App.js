import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import person from "./Person/Person";
class App extends Component {
  state = {
      persons: [
          {id:'abcd1',name : 'Max', age: 26},
          {id:'abcd2',name : 'New', age: 26},
          {id:'abcd3',name : 'world', age: 26}
        ],
      showPersons:false
  }
  deletePersonHandler = (personIndex) => {
      //slice copy default array
      //const persons = this.state.persons.splice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons});
  }
  nameChangeHandler = (event) => {
      this.setState({
          persons: [
              {name : 'ABC', age: 26},
              {name : event.target.value, age: 26},
              {name : 'world', age: 27}
          ]
      })
  }
  //create a methods hide div person
    togglePersonHander = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow});
    }
  render() {
      const style = {
          backgroundColor : '#FFFFFF',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      }
      let persons = null;
      if(this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index)=> {
                      return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}

                            />
                  })}
              </div>
          );
      }
      return(
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <button style={style}
                  onClick={ ()=>this.togglePersonHander()}
          >Toggle Persons</button>
          {persons}
      </div>);
  }
}

export default App;
