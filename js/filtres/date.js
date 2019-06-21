app.filter('myDate' , DateFilter);

function DateFilter() {
	var months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Июнь',
	'Июль',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь'	
	]

	return function( date ) {
		return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
	}
}