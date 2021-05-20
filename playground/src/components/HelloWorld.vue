<template>
  <div class="eslint-code-container">
    <div class="code-block">
      <div style="width: 50%">
        <h3>eslint-plugin-vue</h3>
        <eslint-editor
          :linter="linter"
          :config="vueConfig"
          :code="code"
          :style="{ height }"
          class="eslint-code-block"
          :filename="filename"
          :language="language"
          :preprocess="preprocess"
          :postprocess="postprocess"
          dark
          :format="format"
        >
        </eslint-editor>
      </div>
      <div style="width:50%">
        <h3>eslint-plugin-vueunused</h3>
        <eslint-editor
          :linter="linter"
          :config="vueunusedConfig"
          :code="code"
          :style="{ height }"
          class="eslint-code-block"
          :filename="filename"
          :language="language"
          :preprocess="preprocess"
          :postprocess="postprocess"
          dark
          :format="format"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EslintEditor from "vue-eslint-editor";
import { rules, processors } from "eslint-plugin-vue";
import unusedRules from "eslint-plugin-vueunused/lib/rules/unused";
import { code } from "../utils/code";
export default {
  name: "ESLintCodeBlock",
  components: { EslintEditor },

  props: {
    fix: {
      type: Boolean,
      default: true,
    },
    filename: {
      type: String,
      default: "example.vue",
    },
    language: {
      type: String,
      default: "html",
    },
  },

  data() {
    return {
      linter: null,
      preprocess: processors[".vue"].preprocess,
      postprocess: processors[".vue"].postprocess,
      format: {
        insertSpaces: true,
        tabSize: 2,
      },
      code,
      commonConfig: {
        globals: {
          console: false,
          // ES2015 globals
          ArrayBuffer: false,
          DataView: false,
          Float32Array: false,
          Float64Array: false,
          Int16Array: false,
          Int32Array: false,
          Int8Array: false,
          Map: false,
          Promise: false,
          Proxy: false,
          Reflect: false,
          Set: false,
          Symbol: false,
          Uint16Array: false,
          Uint32Array: false,
          Uint8Array: false,
          Uint8ClampedArray: false,
          WeakMap: false,
          WeakSet: false,
          // ES2017 globals
          Atomics: false,
          SharedArrayBuffer: false,
        },

        parser: "vue-eslint-parser",
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: "module",
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    };
  },

  computed: {
    vueConfig() {
      return {
        ...this.commonConfig,
        rules: {
          "vue/no-unused-properties": ["error", { groups: ["props", "data", "computed", "methods"] }],
        },
      };
    },
    vueunusedConfig() {
      return {
        ...this.commonConfig,
        rules: {
          "vueunused/unused": 1,
        },
      };
    },
    height() {
      const lines = this.code.split("\n").length;
      return `${Math.max(120, 19 * lines)}px`;
    },
  },

  methods: {
    computeCodeFromSlot(nodes) {
      if (!Array.isArray(nodes)) {
        return "";
      }
      return nodes.map(node => node.text || this.computeCodeFromSlot(node.children)).join("");
    },
  },

  async mounted() {
    // Load linter.
    const [{ default: Linter }, { default: coreRules }, { parseForESLint }] = await Promise.all([
      import("eslint4b/dist/linter"),
      import("eslint4b/dist/core-rules"),
      import("espree").then(() => import("vue-eslint-parser")),
    ]);

    const linter = (this.linter = new Linter());

    for (const ruleId of Object.keys(rules)) {
      linter.defineRule(`vue/${ruleId}`, rules[ruleId]);
    }
    linter.defineRule("no-undef", coreRules["no-undef"]);
    linter.defineRule("vueunused/unused", unusedRules);
    linter.defineParser("vue-eslint-parser", { parseForESLint });
  },
};
</script>

<style>
.eslint-code-container {
  border-radius: 6px;
  margin: 1em 0;
}
.code-block {
  display: flex;
}
.eslint-code-block {
  width: 100%;
}

.eslint-editor-actions {
  bottom: -0.9rem;
}
</style>
