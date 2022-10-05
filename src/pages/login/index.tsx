import { ReactElement } from 'react';

import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import { NextPageWithLayout } from '@Core/types/next';
import TemplateDefault from '@Templates/Default';

const Login: NextPageWithLayout = () => {
  return (
    <TemplateDefault>
      <Container>
        <GridRow>
          <GridCol col={10}>
            <h1>Login</h1>
          </GridCol>
        </GridRow>
      </Container>
    </TemplateDefault>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <TemplateDefault>{page}</TemplateDefault>;
};

export default Login;
