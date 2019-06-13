var ComponentSimpleService = {
	data: function() {
		return {
			result: 0
		}
	},
	template: `
	<div id="service-component">
		<div v-for="field of fields">
			<p>{{field.text}}</p>
			<input type="number" v-model="field.value">
		</div>
		<button id="calc_result" @click="formula()">Рассчитать</button>
		<input type="text" id="result" v-model="result" readonly="readonly">
	</div>`
}

var ComponentSickList = {
	serviceType: 'Больничный',
	extends: ComponentSimpleService,
	data: function() {
		return {
			fields: {
				income: {text: 'Зарплата', value: 0},
				exp: {text: 'Стаж', value: 0}
			}
		}
	},
	methods: {
		formula: function() {
			this.result = this.fields.income.value * this.fields.exp.value;
		}
	}
}
var ComponentChildCare = {
	serviceType: 'Уход за ребёнком',
	extends: ComponentSimpleService,
	data: function() {
		return {
			fields: {
				income: {text: 'Хз что', value: 0}
			}
		}
	},
	methods: {
		formula: function() {
			this.result = this.fields.income.value * 0.3;
		}
	}
}
var componentsList = {
	'sick-list': ComponentSickList,
	'child-care': ComponentChildCare
};