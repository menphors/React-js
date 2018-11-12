import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import person from "./Person/Person";
//import Property from './General/Property.js';
//import Property from './General/Property';
var PropTypes = require('prop-types');
export default class App extends React.Component {
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
          <button style={style}
                  onClick={ ()=>this.togglePersonHander()}
          >Toggle Persons</button>
          {persons}
          <Parent />
          <p>prop obj is: ID= {this.props.propObject.obj1.id} Name= {this.props.propObject.obj1.name} Age={this.props.propObject.obj1.age}</p>
          <p>prop string is: {this.props.propString}</p>
          <p>prop number is: {this.props.propNumber}</p>
          <Body />
      </div>);
  }
}
class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cars: ['BMW','TOYOTA','Lexus','Rang Rover']
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({cars: this.state.cars.reverse()});
    }
    render(){
        return(
            <div>
                <h1 onClick={this.handleClick}>just info for Parent</h1>
                <Cars msg="Cars are cool" model="12345" coolCars={this.state.cars}/>
            </div>
        );
    }

}
Parent.defaultProps = {
    cars: ['BMW','TOYOTA','Lexus','Rang Rover']
}
App.defaultProps = {
    propObject:{
        obj1:{
            id: "1234", name: "Thida", age: "28",
        },
        obj2: {
            id: "12345", name: "ThY", age: "38",
        }

    },
    propString: "This is prop string",
    propNumber:3,
}

App.propTypes = {
    propObject: PropTypes.object.isRequired,
    propString: PropTypes.string,
    propNumber: PropTypes.number
}
class Cars extends React.Component {

    render(){
        return(
            <div>
                <h3>just info for cars</h3>
                <p>{this.props.msg}</p>
                <p>{this.props.model}</p>
                <div>{this.props.coolCars.map((item,i) => {
                    return <p key={i}>{item}</p>;
                    }
                )}</div>
            </div>
        );
    }
}
class Body extends Component {
    constructor(props){
        super(props);

        this.state = {
            r:0
        };
        this.getRandomNumer = this.getRandomNumer.bind(this)
    }
    getRandomNumer(){
        //console.log("Random number called");
        this.setState({r: Math.floor(Math.random()* 10) })
    }
    render(){
        return (
          <div>
              <p className="App-intro">
                  <button onClick={this.getRandomNumer}> Random Number</button>
              </p>
              <Numbers myNumber={this.state.r} />
          </div>

        );
    }
}
class Numbers extends Component {
    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillReceiveProps(newProps){
        console.log('recieve');
    }
    shouldComponentUpdate(newProps, nextState){
        console.log('unmount');
        return true;
    }
    componentWillUpdate(newProps, nextState){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(newProps, nextState){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('unmount');
    }
    render(){
        return (
          <div>
              {this.props.myNumber}
          </div>
        );
    }
}
//export default App;
