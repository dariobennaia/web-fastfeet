import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

function Modal({ children, trigger }) {
  return (
    <Popup
      trigger={trigger}
      modal
      position="center center"
      contentStyle={{
        width: '450px',
        borderRadius: '4px',
        padding: '25px',
        marginTop: '250px',
      }}
      overlayStyle={{
        background: 'rgb(0, 0, 0, 0.7)',
        border: 'rgb(0, 0, 0, 0.7)',
        width: '100%',
      }}
    >
      {children}
    </Popup>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  trigger: PropTypes.element.isRequired,
};

export default Modal;
