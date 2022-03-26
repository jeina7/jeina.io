module.exports = function (plop) {
  plop.setGenerator("icon", {
    description: "Generates icon template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your icon name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/icons/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/icon.tsx.hbs",
      },
      {
        type: "append",
        path: "src/components/icons/index.ts",
        template: `export * from "./{{pascalCase name}}";\n`,
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Generates page template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "pages/{{camelCase name}}.tsx",
        templateFile: "plop-templates/page.tsx.hbs",
      },
    ],
  });
};
