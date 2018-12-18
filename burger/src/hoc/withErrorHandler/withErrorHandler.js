import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error : null,
        }



        componentWillMount() {

            this.reqAxios = axios.interceptors.request.use(req => {
                this.setState({error : null});
                return req;
            });

            this.respAxios = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqAxios);
            axios.interceptors.response.eject(this.respAxios);
        }

        errorConfirmedHandler = () => {
            this.setState({error : null});
        }

        render() {
            return (
                <>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withErrorHandler;