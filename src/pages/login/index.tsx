import { ReactElement } from 'react';

import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import { NextPageWithLayout } from '@Core/types/next';
import { PATH } from '@Routes/paths';
import TemplateDefault from '@Templates/Default';
import Link from 'next/link';

const Login: NextPageWithLayout = () => {
  return (
    <TemplateDefault>
      <Container>
        <GridRow>
          <GridCol col={10}>
            <h1>Login</h1>
            <Link href={PATH.notloggedArea.home}>Home</Link>
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
