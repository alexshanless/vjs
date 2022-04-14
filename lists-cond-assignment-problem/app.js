Vue.createApp({
  data() {
    return {
      tasks: [],
      entValue: '',
      visible: true,
    };
  },
  methods: {
    addGoal() {
      this.tasks.push(this.entValue);
      this.entValue = '';
    },
    hiddenToggle() {
      this.visible = !this.visible;
    },
  },
  computed: {
    buttonText() {
      return this.visible ? 'Hide' : 'Show List';
    },
  },
}).mount('#assignment');
