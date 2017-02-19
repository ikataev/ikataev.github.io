# Базовый FrontEnd. Добавляем интерактивность

Пришло время добавить реакцию на действия пользователя. Сегодня мы научимся добавлять
введенные пользователем данных при нажатии на конпку _Add_. А также при нажатии _enter_ 
в поле ввода. 

## Событие

На каждый элемент, видимый на странице, можно воздействовать определенным образом.
Например, на кнопку можно нажать, в поле для ввода текста вводить значения. Каждое
из этих действий можно обрабатывать

### addEventListener

Для обработки событий у элементов существует специальный метод _addEventListener_. 
Он принимает на вход 2 параметра - название события и функцию, которая должна его обработать

```javascript
function onButtonClicked(event) {
  //some code
}

var button = document.getElementById('button')

button.addEventListener('click', onButtonClicked)
```

В текущем курсы мы рассмотрим только 2 вида событий:

* click - для кнопок
* keydown - для полей ввода

## Валидация (проверка) данных

Валидация данных является важным этапом разработки. Перед обработкой пользовательных 
данных их обязательно необходимо проверить. В следующем примере проверим, что пользователь
не пытается отправить нам пустую строку, для этого воспользуемся функцией _trim_:

```javascript
function validate(value) {
    if (value.trim() !== '') {
    	return true //строка не пустая, можно продолжать
    } else {
    	return false //реакция на пустую строку
    }
}

validate('some text')
validate('')
```

## Нажатие на кнопку

Для добавления введенных данных при нажатии на кнопку требуется всего несколько действий:

```javascript
var input = document.getElementById('input') //элемент input
var button = document.getElementById('button') //элемент button

button.addEventListener('click', function() { //добавили обработчик для click
	var value = input.value //получили введенное значение
	
    if (validate(value)) { //проверили что строка не пустая
    	model.push(value) //добавили строку в список значений
    }
    
    render() //вывели новый список значений
    clear() //очистили поле ввода
})
```

## Нажатие enter в поле ввода

```javascript
var input = document.getElementById('input') //элемент input

input.addEventListener('keydown', function(event) { //добавили обработчик для keydown
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
```