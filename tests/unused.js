/**
 * @author Toru Nagashima
 */
"use strict";

const RuleTester = require("eslint").RuleTester;
const rule = require("../lib/rules/unused");
const stripIndent = require("strip-indent");

/**
 *
 *
 * @param {string} code
 * @returns string
 */
function stripIndentAndTrim(code) {
  return stripIndent(code).trim();
}

const tester = new RuleTester({
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: { ecmaVersion: 2015, sourceType: "module" },
});

tester.run("array-bracket-spacing", rule, {
  valid: [
    {
      code: '<template><div :attr="[a]" /></template>',
    },
    {
      code: '<template><div :[attr]="a" /></template>',
    },
    {
      code: '<template><div :[[attr]]="a" /></template>',
    },
    {
      code: `
         <template><div>{{count}}</div></template>
         <script>
         export default {
           data() {
             return {
               count: 0
             }
           }
         }
         </script>
      `,
    },
  ],
  invalid: [
    {
      code: stripIndentAndTrim(`
        <template><div /></template>
        <script>
        export default {
          data() {
            return {
              a: 3
            }
          }
        }
        </script>
      `),
      errors: [
        {
          message: "unused code `a`",
          suggestions: [
            {
              desc: "Remove the unused code",
              output: stripIndentAndTrim(`
        <template><div /></template>
        <script>
        export default {
          data() {
            return {
              
            }
          }
        }
        </script>
      `),
            },
          ],
        },
      ],
    },
  ],
});
