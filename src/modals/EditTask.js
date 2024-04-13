import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const EditTask = () => {
  return (
    <div>
      <Modal>
        <ModalHeader>Update Task</ModalHeader>
        <ModalBody>
          <div>
            <label>Task Name</label>
            <input type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea rows="5" className='form-control'></textarea>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default EditTask
