var listElement = document.getElementById('list')
var inputElement = document.getElementById('input')
var buttonElement = document.getElementById('button')

var model = ['Example', 'Example 2']

function render() {
	listElement.innerHTML = model.reduce((prevValue, value) => prevValue + `<li>${value}</li>`, '')
}

render()