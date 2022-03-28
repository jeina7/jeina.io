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

  plop.setGenerator("component", {
    description: "Generates component template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "append",
        path: "src/components/index.ts",
        template: `export * from "./{{pascalCase name}}";\n`,
      },
    ],
  });

  plop.setGenerator("post", {
    description: "Generates post template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your post slug?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "public/posts/{{name}}/{{name}}.mdx",
        templateFile: "plop-templates/post.mdx.hbs",
      },
      {
        type: "add",
        path: "public/posts/{{name}}/images/a",
      },
    ],
  });
};
