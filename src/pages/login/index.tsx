import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import TemplateDefault from '@Templates/Default';
import type { NextPage } from 'next';

const Login: NextPage = () => {
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

export default Login;
