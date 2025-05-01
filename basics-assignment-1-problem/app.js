let data = {
    name: "Nitesh",
    age: 30,
    imageLink : "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
    value: "hello"
}

const app = Vue.createApp({
    data() {
        return data;
    }

});
app.mount("#assignment");