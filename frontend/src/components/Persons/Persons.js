import React, {Component} from 'react';
import Person from './Person/Person.js'

// Can directly return by doing like below:
class Persons extends Component{

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
      }
    
      componentWillMount(){
        console.log('[Persons.js] Will Mount');
      }
      
      componentDidMount() {
        console.log('[Persons.js] Did Mount');
      }

    render () {
        console.log('[Persons.js] Rendert');
        return this.props.persons.map( ( person, index ) => {
            return <Person
                click={() => this.props.clicked( index )}
                name={person.name}
                key={person.id}
                age={person.age}
                changed={( event ) => this.props.changed( event, person.id )}/>
          });
    }
 
}

export default Persons;