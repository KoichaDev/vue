new Vue({
  el: "#app",
  data: {
    title: "Hello World",
    link: 'https://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    sayHello: function() {
        this.title = 'Hello!';
        return this.title;
    }
  }
});
