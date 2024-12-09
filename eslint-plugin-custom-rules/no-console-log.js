module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the use of console.log",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      avoidConsoleLog: "Avoid using 'console.log'. Use a logger instead.",
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.name === "console" &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            messageId: "avoidConsoleLog",
          });
        }
      },
    };
  },
};
