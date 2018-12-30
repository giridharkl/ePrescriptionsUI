import React, {Component} from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class SettingsModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalState
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    }, () =>{console.log("SettingsModal state " + this.state.modal)});
    this.props.handleModalClose();
  }
  
  componentWillReceiveProps(nextProps) {
    
    this.setState({modal: nextProps.modalState});
  }

  render(){
    return(
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Settings Modal</ModalHeader>
          <ModalBody>
            <p>Settings modal body</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Save changes</Button>
          </ModalFooter>
        </Modal>
    );
  }

}

export default SettingsModal;