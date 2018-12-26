import React from 'react';
import { Modal, Button } from 'react-bootstrap';
class ErrorSuccess extends React.Component {

    render() {
        return (
            <div>
            <div className="modal-backdrop">
            </div>
            <Modal.Dialog className="top-50 modalMain" aria-labelledby="contained-modal-title-sm" >

                <Modal.Body>
                    <span className="successIcon glyphicon glyphicon-ok-sign"> <i className="fa fa-check-circle" aria-hidden="true"></i></span>
                    <h4><span className="glyphicon glyphicon-ok"></span>{this.props.code == "1" ? "Error Occured" : "Success"}</h4>
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