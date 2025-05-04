let data = {
  boxASelected: false,
  boxBSelected: false,
  boxCSelected: false,
};
const app = Vue.createApp({
  data() {
    return data;
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
}).mount("#styling");
