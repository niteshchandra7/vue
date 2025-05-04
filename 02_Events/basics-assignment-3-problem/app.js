`use strict`;
let data = {
  num: 0,
  output: "",
};
const app = Vue.createApp({
  data() {
    return data;
  },
  watch: {
    num(value) {
      if (value < 37) {
        this.output = "Not there Yet";
      } else if (value == 37) {
        this.output = "You Won!";
      } else {
        that = this;
        this.output = "Too Much!";
        setTimeout(() => {
          that.num = 0;
        }, 1000);
      }
    },
  },
  methods: {
    add(value) {
      this.num += value;
    },
  },
}).mount("#assignment");
