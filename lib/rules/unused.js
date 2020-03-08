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
            suggest: [
              {
                desc: 'Remove the unused code',
                *fix(fixer) {
                  yield fixer.removeRange(token);
                  let nextToken = sourceCode.getTokenAfter(token);
                  while (nextToken && nextToken.value === ',') {
                    yield fixer.remove(nextToken);
                    nextToken = sourceCode.getTokenAfter(nextToken);
                  }
                },
              },
            ],
          });
        });
      },
    };
  },
};
