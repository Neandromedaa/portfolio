import ReactPlayer from 'react-player/youtube';
import Modal from 'react-modal';
import React from 'react';

function OpenedCard({link, src, type, open}){
    Modal.setAppElement(document.querySelector('.scroll'));
    const customStyles = {
        content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            zIndex: '100',
            background: 'none',
            inset: '0',
            padding: '0',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            cursor: 'pointer',
        }
    };

    return <Modal isOpen={open} style={customStyles}>
            {link ? 
            <ReactPlayer url={`https://www.youtube.com/watch?v=${link}`} width={''} height={''} controls={'true'}/> : 
            <img src={`/images/${type}/${src}.1.jpg`} alt="pic"/>}
        </Modal>

        
}

export default OpenedCard;