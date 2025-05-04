const app = Vue.createApp({
  data() {
    return {
      currInputValue: "",
      inputValue: "",
    };
  },
  methods: {
    showAlert() {
      alert("practicing event");
    },
    setInput(event) {
      this.inputValue = event.target.value;
    },
    onKeyDown(event) {
      this.currInputValue = event.target.value;
    },
  },
}).mount("#assignment");
