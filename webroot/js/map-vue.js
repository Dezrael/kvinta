var map_app = new Vue ({
	data: {
		number: '',
		isFull: true
	},
	template: `<div id="map-service" class="box box-default clearfix">
    	<div id="map" :class="{full_map: isFull, map: !isFull}"></div>
    	<div id="map-description" > {{ number }}</div>   
	</div>`,
	watch: {
		number: function(val) {
			if(val!='') isFull = true
			else isFull = false
		}
	}
});

map_app.$mount('#map-service');