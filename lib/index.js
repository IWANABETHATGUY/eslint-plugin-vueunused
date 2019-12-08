/**
 * @fileoverview a eslint plugin for detecting unused code in vue single file component
 * @author eslint-plugin-vueunused
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



// import processors
module.exports.processors = {
    ".vue": {
        processors(code) {
            return [code]
        }
    }
    // add your processors here
};

