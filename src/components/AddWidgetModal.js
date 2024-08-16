import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/widgetSlice';
import { Modal, Button, Form } from 'react-bootstrap';

const AddWidgetModal = ({ categoryId }) => {
    const [show, setShow] = useState(false);
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newWidget = {
            id: Date.now(),
            name: widgetName,
            text: widgetText
        };
        dispatch(addWidget({ categoryId, widget: newWidget }));
        setShow(false);
        setWidgetName('');
        setWidgetText('');
    };

    return (
        <>
            <Button className="addWidget" onClick={() => setShow(true)}>
                + Add Widget
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='title'>Add Widget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="widgetName">
                            <Form.Label >Widget Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter widget name"
                                value={widgetName}
                                onChange={(e) => setWidgetName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="widgetText">
                            <Form.Label>Widget Text</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter widget text"
                                value={widgetText}
                                onChange={(e) => setWidgetText(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='outline-button' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button className='confirm-button' onClick={handleSubmit}>
                        Add Widget
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddWidgetModal;
