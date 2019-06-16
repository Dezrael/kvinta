var map_app = new Vue ({
	data: {
		name: '',
		center: '',
		population: '',
		density: '',
		area: '',
		description: '',
		code: '',
		displayPhoto: true
	},
	template: `<div id="map-service" class="box box-default clearfix">
    	<div id="map"></div>
    	<div v-if="name != ''" id="map-description" > 	
    		<p><b>Название региона:</b> {{ name }} </p>
    		<p><b>Административный центр:</b> {{ center }} </p>
    		<p><b>Численность населения (чел.):</b> {{ population }} </p>
    		<p><b>Плотность населения (чел./км<sup>кв</sup>):</b> {{ density }} </p>
    		<p><b>Площадь (км<sup>кв</sup>):</b> {{ area }} </p>
    		<img :src="'/img/maps/' + this.code + '.jpg'" width="100%" alt="Достопримечательности" onload = "this.style.display = 'block'" onerror = "this.style.display = 'none'" style="margin: 2%; display:block;">
    		<p><b>Описание:</b> {{ description }} </p>
    	</div>
    	<div v-else="" id="map-description"> <b> Выберите регион </b> </div>  
	</div>`
});

map_app.$mount('#map-service');