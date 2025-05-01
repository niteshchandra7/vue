let data = {
    courseGoal : "Finish the course and learn Vue!",
    vueLink: "https://vuejs.org/",
    courseGoalA : "Learn Vue!",
    courseGoalB : "Master Vue!",
};

const app = Vue.createApp({
    data(){
        return data;
    },
    methods: {
        outputGoal() {
            const randNumber = Math.random(0,1);
            if(randNumber<0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');