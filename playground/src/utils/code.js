export const code = `
<template> </template>

<script>
export default {
  data() {
    return {
      nw: '',
      sn: '',
      th: '',
    };
  },
  created() {
    this.test();
    const { nw } = this;
  },
  methods: {
    test() {
      const { sn } = this;
      this.test2();
    },
    test2() {
      console.log(this.th);
      this.test2();
    },
  },
};
</script>

<style></style>
`