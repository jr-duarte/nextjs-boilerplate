import { ReactElement } from 'react';

import Container from '@Components/core/Container';
import GridCol from '@Components/core/Grid/Col';
import GridRow from '@Components/core/Grid/Row';
import { NextPageWithLayout } from '@Core/types/next';
import TemplateDefault from '@Templates/Default';

const Dashboard: NextPageWithLayout = () => {
  return (
    <Container>
      <GridRow>
        <GridCol col={10}>
          <h1>Dashboard</h1>
        </GridCol>
      </GridRow>
    </Container>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <TemplateDefault>{page}</TemplateDefault>;
};

export default Dashboard;
