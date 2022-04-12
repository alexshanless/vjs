Vue.createApp({
  data() {
    return {
      inputClass: '',
      isHidden: false,
      inlineStyle: '',
    };
  },
  methods: {
    toggle() {
      this.isHidden = !this.isHidden;
    },
  },
}).mount('#assignment');
