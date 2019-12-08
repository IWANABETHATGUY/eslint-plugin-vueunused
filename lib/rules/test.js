module.exports = {
  create: function(context) {
    // declare the state of the rule
    return {
      Program(node) {
        context.report({
          loc: {
            start: {
              line: 9,
              column: 2,
            },
            end: { line: 9, column: 9 },
          },
          message: 'mounted',
        });
      },
    };
  },
};

