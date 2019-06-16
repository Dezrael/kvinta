var map_app = new Vue ({
	data: {
		name: '',
		center: '',
		population: '',
		density: '',
		area: '',
		description: ''
	},
	template: `<div id="map-service" class="box box-default clearfix">
    	<div id="map"></div>
    	<div v-if="name != ''" id="map-description" > 
    		<p><b>Название региона:</b> {{ name }} </p>
    		<p><b>Административный центр:</b> {{ center }} </p>
    		<p><b>Численность населения (чел.):</b> {{ population }} </p>
    		<p><b>Плотность населения (чел./км<sup>кв</sup>):</b> {{ density }} </p>
    		<p><b>Площадь (км<sup>кв</sup>):</b> {{ area }} </p>
    		<p><b>Описание:</b> {{ description }} </p>
    	</div>
    	<div v-else="" id="map-description"> Выберите регион </div>  
	</div>`
});

map_app.$mount('#map-service');