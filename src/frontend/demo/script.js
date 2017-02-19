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

render()