new Vue({
	el: '#app',
	data: {
		counter: 0,
		title: 'Hello World!',
		finishedLink: '<a href="http://google.com">Google</a>',
		link: 'http://google.com'
	},
	methods: {
		sayHello: function () {
			this.title = 'Hello';
			return this.title;
		},
		increase: function () {
			this.counter++;
		}
	}
});
