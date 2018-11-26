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

      componentWillReceiveProps(nextProps)
      {
          console.log('[UPDATE Persons.js] Inside componentWillReceiveProps',nextProps)          
      }

      shouldComponentUpdate(nextProps, nextState)
      {
          console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
          return nextProps.persons !== this.props.persons;
      }

      componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
      }

      componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
      }

    render () {
        console.log('[Persons.js] Render');
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