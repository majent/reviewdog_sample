module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Prohibit destructuring of the second argument in files under src/schema/query/",
      recommended: false,
    },
    messages: {
      noDestructuringSecondArg:
        "Destructuring of the second argument is prohibited in this function.",
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
        const secondParam = node.params[1];
        if (
          secondParam &&
          (secondParam.type === "ObjectPattern" ||
            secondParam.type === "ArrayPattern")
        ) {
          context.report({
            node: secondParam,
            messageId: "noDestructuringSecondArg",
          });
        }
      },
      FunctionExpression(node) {
        const secondParam = node.params[1];
        if (
          secondParam &&
          (secondParam.type === "ObjectPattern" ||
            secondParam.type === "ArrayPattern")
        ) {
          context.report({
            node: secondParam,
            messageId: "noDestructuringSecondArg",
          });
        }
      },
      ArrowFunctionExpression(node) {
        const secondParam = node.params[1];
        if (
          secondParam &&
          (secondParam.type === "ObjectPattern" ||
            secondParam.type === "ArrayPattern")
        ) {
          context.report({
            node: secondParam,
            messageId: "noDestructuringSecondArg",
          });
        }
      },
    };
  },
};
