Vue.createApp({
  data() {
    return {
      output: 0,
    };
  },
  methods: {
    addFive() {
      this.output += 5;
    },
    addOne() {
      this.output++;
    },
  },
  computed: {
    thirtySeven() {
      if (this.output < 37) {
        return 'Not there yet';
      } else if (this.output > 37) {
        return 'Too much';
      }
      return 37;
    },
  },
  watch: {
    output(value) {
      if (value !== 0) {
        setTimeout(() => (this.output = 0), 5000);
      }
    },
  },
}).mount('#assignment');
