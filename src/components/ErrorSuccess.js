import React from 'react';
import { Modal, Button } from 'react-bootstrap';
class ErrorSuccess extends React.Component {

    render() {
        return (
            <div>
            <div className="modal-backdrop">
            </div>
            <Modal.Dialog className="top-50" aria-labelledby="contained-modal-title-sm" >

                <Modal.Body>
                    <h4>{this.props.code == "1" ? "Error Occured" : "Success"}</h4>
                    <p>
                        {this.props.message}
                    </p>
                    {this.props.code == "1" ?
                        <Button bsStyle="danger" bsSize="small" onClick={(e) => this.props.closeModal(e)}>close</Button>
                        :
                        <Button bsStyle="primary" bsSize="small" onClick={(e) => this.props.closeModal(e)}>close</Button>}

                </Modal.Body>
            </Modal.Dialog>
            </div>
        )
    }
}

export default ErrorSuccess;