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
		renderHtml: '<a href="http://hey.com">Testing</a><h1>Testing</h1>',
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
			if(this.status){
				this.status = false;
				this.hide = false;
			}else{
				this.status = true;
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