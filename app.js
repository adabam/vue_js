new Vue({
	el: '#app',
	data: {
		counter: 0,
		title: 'Hello World!',
		finishedLink: '<a href="http://google.com">Google</a>',
		link: 'http://google.com',
		x: 0,
		y: 0
	},
	methods: {
		sayHello: function () {
			this.title = 'Hello';
			return this.title;
		},
		increase: function () {
			this.counter++;
		},
		updateCoordinates: function (event) {
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
});
