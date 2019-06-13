var app = new Vue({
	components: componentsList,
	data: {
		currentType: 'sick-list',
		serviceTypes: componentsList
	},
	template: `
	<div id="service">
	<div id="service-type">
        <h3>Выберите тип услуги</h3>
        <select name="service-type" v-model="currentType">
            <option v-for="(value,key) of serviceTypes" :value="key">{{value.serviceType}}</option>
        </select>
    </div>
    <hr>
    <component :is="currentType"></component>
    </div>
    `
});

app.$mount('#calculator')