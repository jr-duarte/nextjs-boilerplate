import { ReactElement, useState } from 'react';

import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import ModalTeste from '@Components/ModalTeste';
import { NextPageWithLayout } from '@Core/types/next';
import { PATH } from '@Routes/paths';
import TemplateDefault from '@Templates/Default';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <Container>
      <GridRow>
        <GridCol col={10}>
          <button type="button" onClick={handleModalOpen}>
            Abrir Modal
          </button>
          <ModalTeste isOpen={modalShow} onClose={handleModalClose} />
          <h1>Teste</h1>
          <Link href={PATH.notloggedArea.login}>Login</Link>
        </GridCol>
      </GridRow>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <TemplateDefault>{page}</TemplateDefault>;
};

export default Home;
