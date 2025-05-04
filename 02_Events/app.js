const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      //fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    //name(newvalue, oldvalue) {
    // name(value) {
    //   // logic that shouold run when name attribute changes
    //   // this.fullname = this.name + " " + "Chandra";
    //   if (value === "") this.fullName = value; // better way
    //   else this.fullName = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value === "") this.fullName = ""; // better way
    //   else this.fullName = this.name + " " + value;
    // },
  },
  computed: {
    fullName() {
      console.log("outputFullName called");
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    // outputFullName() {
    //   console.log("outputFullName called");
    //   if (this.name === "") return "";
    //   return this.name + " " + "Chandra";
    // },
    add(num) {
      return (this.counter += num);
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.fullname = this.name;
    },
    resetInput() {
      console.log("hello world");
      this.name = "";
    },
  },
});

app.mount("#events");
