import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalComponent = () => {
    const [show, setShow] = useState(false)

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

  return (
    <div>
        <Button variant='warning' onClick={handleOpen}>
            Button for Modal
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal {'>'} .Header {'>'} .Title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal.Body</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='warning' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ModalComponent
