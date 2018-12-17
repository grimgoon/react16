import React, {Component} from 'react';
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
       return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('Modal will update!');
    }

    render() {
        return (
            <>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
                <div 
                    className={styles.Modal}
                    style={{
                        transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                        opacity: this.props.show ? '1' : '0',
                    }}>
                    
                    {this.props.children}
                </div>
             </>
        );
    }
}

export default modal;