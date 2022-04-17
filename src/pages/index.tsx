import { useState } from 'react';

import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import ModalTeste from '@Components/ModalTeste';
import TemplateDefault from '@Templates/Default';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <TemplateDefault>
      <Container>
        <GridRow>
          <GridCol col={10}>
            <button type="button" onClick={handleModalOpen}>
              Abrir Modal
            </button>
            <ModalTeste isOpen={modalShow} onClose={handleModalClose} />
          </GridCol>
        </GridRow>
      </Container>
    </TemplateDefault>
  );
};

export default Home;
