var app = new Vue({
	components: componentsList,
	data: {
		currentType: 'sick-list',
		serviceTypes: componentsList
	},
	template: `
	<div>
	<div id="service-type">
        <h4>Выберите тип услуги</h4>
        <select name="service-type" v-model="currentType">
            <option v-for="(value,key) of serviceTypes" :value="key">{{value.serviceType}}</option>
        </select>
    </div>
    <component :is="currentType"></component>
    </div>
    `
});

app.$mount('#calculator')