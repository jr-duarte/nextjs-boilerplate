import { useEffect } from 'react';
import Modal from 'react-modal';

type ModalComponentProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export default function ComponentModal({
  isOpen,
  children,
}: ModalComponentProps) {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const customStylesModal = {
    content: {
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100vh',
      background: 'transparent',
      inset: '0px',
      border: 'none',
      padding: '0px',
      borderRadius: 'none',
    },
  };

  return (
    <Modal isOpen={isOpen} style={customStylesModal} ariaHideApp={false}>
      {children}
    </Modal>
  );
}
