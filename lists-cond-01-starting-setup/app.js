const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount('#user-goals');
