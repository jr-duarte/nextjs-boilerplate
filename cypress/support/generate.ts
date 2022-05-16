import { build, fake } from '@jackfranklin/test-data-bot';

//Example of how to generate data
export type User = {
  username: string;
  email: string;
  password: string;
};

export const createUser = build<User>('User', {
  fields: {
    username: fake((f) => f.internet.userName()),
    password: fake((f) => f.internet.password()),
    email: '',
  },
  postBuild: (user) => ({
    ...user,
    email: `${user.username.toLowerCase()}+e2e@teste.com`,
  }),
});

export type Queue = {
  name: string;
  description: string;
};

export const createQueue = build<Queue>('Queue', {
  fields: {
    name: fake((f) => f.company.companyName()),
    description: fake((f) => f.lorem.sentence()),
  },
});
