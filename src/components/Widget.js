import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/widgetSlice';
import { AiOutlineClose } from 'react-icons/ai';

const Widget = ({ categoryId, widget }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeWidget({ categoryId, widgetId: widget.id }));
    };

    return (
        <div className="widget">
            <div className="deleteButton">
                <button onClick={handleRemove}><AiOutlineClose /></button>
            </div>
            <div className='widgetName'>
                <p className='title'>{widget.name}</p>
                <p className='subTitle'>{widget.text}</p>
            </div>
        </div>
    );
};

export default Widget;
