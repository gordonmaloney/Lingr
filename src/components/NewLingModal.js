import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewLingComponent from './NewLingComponent.js'

const NewLingModal = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className="menu-btn">New Ling</Button>
      <Modal isOpen={modal} toggle={toggle} className="new-ling-modal">
        <ModalHeader toggle={toggle}>New Ling</ModalHeader>
        <ModalBody>
            <NewLingComponent />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Post Ling</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewLingModal;