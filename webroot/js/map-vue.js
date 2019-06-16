var map_app = new Vue ({
	data: {
		number: 'Выберите регион',
	},
	template: `<div id="map-service" class="box box-default clearfix">
    	<div id="map"></div>
    	<div id="map-description" > {{ number }}</div>   
	</div>`
});

map_app.$mount('#map-service');