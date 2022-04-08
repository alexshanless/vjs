Vue.createApp({
  data() {
    return {
      output: '',
      outputOnEnter: '',
    };
  },
  methods: {
    alert() {
      alert('Hello wurld');
    },
    registerText(event) {
      this.output = event.target.value;
    },
    outputOnEnterM(event) {
      this.outputOnEnter = event.target.value;
    },
  },
}).mount('#assignment');
