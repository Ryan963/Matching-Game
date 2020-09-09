var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
];

function shuffled(array) {
    let temp;
    let position;
    for(let i=array.length - 1; i > 0; i--){
        position = Math.floor(Math.random()* (i + 1))
        temp = array[i]
        array[i] = array[position]
        array[position] = temp
    }
    return array
}

var doubleDeck = cardsArray.concat(cardsArray)
var shuffledArray = shuffled(doubleDeck);
var game = document.getElementById('game-board')
for (let card of shuffledArray) {
    var cards_div = document.createElement('div');
    var front = document.createElement('div')
    var back = document.createElement('div')
    front.classList.add('front')
    back.classList.add('back')
    cards_div.classList.add('card');
    cards_div.dataset.name = card['name'];
    back.style.backgroundImage = `url(${card['img']})`;
    cards_div.appendChild(front)
    cards_div.appendChild(back)
    game.appendChild(cards_div)
}
var choice_1 = ''
var choice_2 = ''
count = 1
game.addEventListener('click',function(event) {
    var clicked = event.target
    if (clicked.classList.contains('grid') || clicked.parentNode.classList.contains('selected')){
        return
    }
    if (count < 2) {
        count ++
        choice_1 = clicked.parentNode.dataset.name
        clicked.parentNode.classList.add('selected')
    } else if ( count === 2){
        count++
        choice_2 = clicked.parentNode.dataset.name
        clicked.parentNode.classList.add('selected')
        var select_class = document.querySelectorAll('.selected')
        if (choice_1===choice_2) {
            for(let item of select_class) {
                setTimeout(function(){item.classList.add('match')
                item.lastChild.style.backgroundImage = null; item.style.border = '4px solid red'},800)
            } 
        }
        else {
            for(let item of select_class){
                if(item.classList.contains('match')){
                    continue
                } else{
                    setTimeout(function(){item.classList.remove('selected')},800)
                }  
            }                     
        }
        count = 1
    }
})


