const { unusedToken } = require('vscf-deadcode-detect');
module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },
  create: function(context) {
    // declare the state of the rule
    const sourceCode = context.getSourceCode();
    const code = sourceCode.getText();
    const unusedList = unusedToken(code);
    unusedList.forEach(token => {
      let node = sourceCode.getNodeByRangeIndex(
        sourceCode.getIndexFromLoc({
          line: token.loc.start.line,
          column: token.loc.start.column,
        })
      );
      while (node && node.type !== 'Property') {
        node = node.parent;
      }
      context.report({
        loc: token.loc,
        message: `unused code \`${token.name}\``,
        data: {
          identifier: token.name,
        },
        suggest: [
          {
            desc: 'Remove the unused code',
            *fix(fixer) {
              yield fixer.remove(node);
              let nextToken = sourceCode.getTokenAfter(node);
              while (nextToken && nextToken.value === ',') {
                yield fixer.remove(nextToken);
                nextToken = sourceCode.getTokenAfter(nextToken);
              }
            },
          },
        ],
      });
    });
    return {};
  },
};
