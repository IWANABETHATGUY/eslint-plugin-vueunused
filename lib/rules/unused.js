const { unusedToken } = require('vscf-deadcode-detect');
module.exports = {
  meta: {
    type: 'suggestion',
  },
  create: function(context) {
    // declare the state of the rule
    const sourceCode = context.getSourceCode();
    const code = sourceCode.getText();
    const unusedList = unusedToken(code);
    return {
      Program(node) {
        unusedList.forEach(token => {
          context.report({
            loc: token.loc,
            message: `unused code \`${token.name}\``,
            data: {
              identifier: node.name,
            },
          });
        });
      },
    };
  },
};
