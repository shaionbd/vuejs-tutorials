new Vue({
	el: '#vue-app',
	data: {
		message: "Hello World",
	},
	methods: {
		
	}
})

new Vue({
	el: '#vue-container',
	data: {
		age: 15,
		message: "Hello Bangladesh",
		website: "http://www.hello.com",
		renderHtml: '<a href="http://hey.com">Testing</a><p>Testing</p>',
		output: ""
	},
	methods: {
		Add: function(increase){
			this.age += increase;
		},
		Subtract: function(decrease){
			this.age -= decrease;
		},
		click: function(){
			alert("Hello World");
		},
		reverseMessage: function(){
			this.output = this.message.split('').reverse().join('');
		}
	}
})

new Vue({
	el: '#vue-css',
	data: {
		hide: true,
		status: true,
		color: true
	},
	methods: {
		loremShow: function(){
			if(this.hide){
				// this.status = false;
				this.hide = false;
			}else{
				// this.status = true;
				this.hide = true;
			}
		},
		changeColor: function(){
			this.color = this.color == true ? false : true;
		}
	}
})

new Vue({
	el: '#vue-condition',
	data: {
		error: false,
		success: false
	},
	methods: {
		
	}
})

new Vue({
	el: '#vue-loop',
	data: {
		singleValues: ['apple', 'banana', 'cherry', 'date', 'eggfruit', 'fig', 'grape'],
		multipleObjects: [
			{name: 'Apple', shape: 'circle'},
			{name: 'Banana', shape: 'tall'},
			{name: 'Cherry', shape: 'circle'},
			{name: 'Date', shape: 'tall'},
			{name: 'Eggfruit', shape: 'circle'},
			{name: 'Fig', shape: 'oval'}
		]
	},
	methods: {
		ucfirst: function(e){
			return e.charAt(0).toUpperCase() + e.slice(1);
		}
	}
})