var ComponentSimpleService = {
	data: function() {
		return {
			mrot: 11280,
			result: 'Результат'
		}
	},
	template: `
	<div id="service-component">
		<div class="description" v-html="description"></div><hr>
		<div id="fields">
			<div class="field" v-for="field of fields">
				<p>{{field.text}}</p>
				<input type="number" v-model="field.value">
			</div>
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
				income: {text: 'Сумма заработка работника за рачётный период', value: ''},
				exp: {text: 'Стаж работника(лет)', value: ''},
				days: {text: 'Количество дней нетрудоспособности', value: ''}
			}, 
			description: `<p>Чтобы определить размер этого пособия, для начала нужно рассчитать 
			сумму среднего дневного заработка работника, представившего больничный.</p>
			<img src="/img/sick-list/sick-list1.jpg" alt="Формула среднего дневного заработка">
			<p>Также не стоит забывать и о том, что если средний заработок работника в расчете на 
			каждый полный месяц расчетного периода меньше МРОТ 
			(ч.1.1 ст.14 Федерального закона от 29.12.2006 N 255-ФЗ), то сумма заработка работника 
			за расчетный период принимается равной 24 МРОТ.</p>
			
			<p>Определив размер среднего дневного заработка, нужно рассчитать размер дневного пособия, 
			которое зависит от стажа работника</p>
			<img src="/img/sick-list/sick-list2.jpg" alt="Формула размера дневного пособия">
			<p>Теперь можно приступать непосредственно к расчету суммы пособия по временной нетрудоспособности</p>
			<img src="/img/sick-list/sick-list3.jpg" alt="Формула пособия">`
		}
	},
	methods: {
		formula: function() {
			var medium_income = this.fields.income.value / 730;
			medium_income = Math.max(this.mrot * 24 / 730, medium_income);
			var day_soc = medium_income * (this.fields.exp < 10 ? 0.3 : 0.5);
			this.result = Math.round(day_soc * this.fields.days.value * 100)/100;
			console.log(this.lol);
		}
	}
}
var ComponentChildCare = {
	serviceType: 'Уход за ребёнком',
	extends: ComponentSimpleService,
	data: function() {
		return {
			fields: {
				income: {text: 'Средний дневной заработок работницы', value: 0}
			},
			description: `<p>Это пособие рассчитывается исходя из среднего дневного заработка работницы</p>
			<p>Сумма ежемесячного пособия рассчитывается по следующей формуле:</p>
			<img src="/img/child-care/child1.jpg" alt="Формула пособия">
			<p>Если же получилось, что средний заработок работницы в расчете на каждый полный месяц 
			расчетного периода меньше МРОТ (ч.1.1 ст.14 Федерального закона от 29.12.2006 № 255-ФЗ), 
			то пособие по уходу за ребенком рассчитывается исходя из МРОТ</p>
			<img src="/img/child-care/child2.jpg" alt="Формула пособия исходя из МРОТ">`,
		}
	},
	methods: {
		formula: function() {
			if(this.fields.income.value * 30 < this.mrot)
				this.result = Math.round(this.mrot * 0.4 * 100) / 100;
			else
				this.result = Math.round(this.fields.income.value * 30.4 * 0.4 * 100) / 100;
		}
	}
}
var componentsList = {
	'sick-list': ComponentSickList,
	'child-care': ComponentChildCare
};