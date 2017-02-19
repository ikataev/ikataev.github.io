var list = document.getElementById('list')
var input = document.getElementById('input')
var button = document.getElementById('button')

var model = ['Example', 'Example 2']

function render() {
	var index = 0
	var length = 0
	var template = ''

	for (index, length = model.length; index < length; index++) {
		template += '<li>' + model[index] + '</li>'
	}

	list.innerHTML = template
}

function validate(value) {
	if (value.trim() !== '') {
		return true //строка не пустая, можно продолжать
	} else {
		return false //реакция на пустую строку
	}
}

function clear() {
	input.value = ''
}

input.addEventListener('keydown', function(event) { //добавили обработчик для input
	if (event.keyCode !== 13) {
		return
	}

	var value = input.value //получили введенное значение

	if (validate(value)) { //проверили что строка не пустая
		model.push(value) //добавили строку в список значений
	}

	render() //вывели новый список значений
	clear() //очистили поле ввода
})

button.addEventListener('click', function() {
	var value = input.value

	if (validate(value)) {
		model.push(value)
	}

	render()
	clear()
})

render()