# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project1

```javascript

console.log('shourya');
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
        // body.style.backgroundColor = 'pink';
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
        // body.style.backgroundColor = 'pink';
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
        // body.style.backgroundColor = 'pink';
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
        // body.style.backgroundColor = 'pink';
        body.style.backgroundColor = e.target.id;
        }
    })
})

```
