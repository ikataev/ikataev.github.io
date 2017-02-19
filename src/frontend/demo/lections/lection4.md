# Базовый FrontEnd. Вывод списка дел

На текущий момент у нас есть шаблон будущего приложения и знания основ _JavaScript_.
Пришло время придать нашей странице интерактивности.

## Document

При запуске приложения в браузере, _JavaScript_ имеет доступ к нескольким глобальным объектам,
один из них - _Document_. _Document_ хранит методы для работы с элементам страницы (тегам)
для получения к ним доступа из _JavaScript_

### getElementById

Один из методов - getElementById. С его помощью можно сохрнить элемент страницы в переменную
и в дальнейшем менять его свойства. Метод принимает на вход один обязательный параметр,
который является идентефикатором (атрибут _id_) тега на странице.

```html
<ul id="list"></ul>
<script>
    var list = document.getElementById('list')
</script>
```

В примере выше мы создали нумерованный список (_ul_) и присвоили ему едентификатор list.
Теперь в _JavaScript_ мы можем получить этот элемент, воспользовавшись методом getElementById.

## Вывод списка значений

На текущий момент у нас есть вся необходимая информация, для вывода списка дел
 на страницу.
 
### Шаг 1

Получим элемент списка и создадим элемент значений, который будем выводить:

//index.html
```html
<ul id="list"></ul>
<script src="script.js"></script> 
```

//script.js
```javascript
var list = document.getElementById('list')
var model = ['Example 1', 'Example 2']
```

### Шаг 2

Напишем код для вывода значений на страницу:

```javascript
var index = 0
var length = 0
var template = ''

for (index, length = model.length; index < length; index++) {
	template += '<li>' + model[index] + '</li>'
}

list.innerHTML = template
```

### Шаг 3

Обернем получившийся код в функцию, так будет гораздо удобнее его использовать и вызовем:

```javascript
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
```