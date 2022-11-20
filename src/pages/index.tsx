import { ReactElement, useState } from 'react';
import { ReactTagManager } from 'react-gtm-ts';

import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import ModalTeste from '@Components/ModalTeste';
import { NextPageWithLayout } from '@Core/types/next';
import { PATH } from '@Routes/paths';
import TemplateDefault from '@Templates/Default';
import { Button } from 'design-system-tsup-example-1';
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
          <Button
            onClick={() =>
              ReactTagManager.action({
                event: 'click_all_button',
                clickText: 'teste',
                teste: 'teste',
              })
            }
          >
            teste
          </Button>
          <button
            type="button"
            onClick={() => {
              handleModalOpen();
              ReactTagManager.action({
                event: 'click_all_button',
                clickText: 'Abrir Modal',
              });
            }}
          >
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
