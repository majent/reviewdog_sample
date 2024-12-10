module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Prohibit destructuring of context argument in files under src/schema/query/",
      recommended: false,
    },
    messages: {
      noDestructuringSecondArg:
        "Destructuring of context argument is prohibited in this function.",
    },
    schema: [],
  },

  create(context) {
    const filename = context.getFilename();

    if (!/src\/schema\/.*\.ts$/.test(filename)) {
      return {};
    }

    return {
      FunctionDeclaration(node) {
        const param = node.params[2];
        if (
          param &&
          (param.type === "ObjectPattern" || param.type === "ArrayPattern")
        ) {
          context.report({
            node: param,
            messageId: "noDestructuringSecondArg",
          });
        }
      },
      FunctionExpression(node) {
        const param = node.params[2];
        if (
          param &&
          (param.type === "ObjectPattern" || param.type === "ArrayPattern")
        ) {
          context.report({
            node: param,
            messageId: "noDestructuringSecondArg",
          });
        }
      },
      ArrowFunctionExpression(node) {
        const param = node.params[2];
        if (
          param &&
          (param.type === "ObjectPattern" || param.type === "ArrayPattern")
        ) {
          context.report({
            node: param,
            messageId: "noDestructuringSecondArg",
          });
        }
      },
    };
  },
};
