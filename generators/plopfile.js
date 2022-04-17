module.exports = (plop) => {
  // Components
  plop.setGenerator('Component Simple', {
    description: 'applies simple component structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/components/simple/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: 'plop-templates/components/simple/styles.ts.hbs',
      },
    ],
  });

  // Pages
  plop.setGenerator('Page Simple', {
    description: 'applies simple page structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the page?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/pages/simple/index.tsx.hbs',
      },
    ],
  });
};
