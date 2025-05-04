let data = {
  userName: "",
  isVisible: true,
  color: "",
};

const app = Vue.createApp({
  data() {
    return data;
  },
  computed: {
    getUser() {
      console.log(this.userName);
      return this.userName;
    },
  },
  methods: {
    pressButton() {
      this.isVisible = !this.isVisible;
      console.log(this.isVisible);
    },
  },
}).mount("#assignment");
