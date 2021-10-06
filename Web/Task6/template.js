var TEMPLATE = '<div class="dataItem"><b>{{name}}</b></div>';


var DATA = [
    {
        title : 'Chuck Norris Bodyguards',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.',
        price: 'Desde $15 / 12 horas'
    },
    {
        title : 'Donuts Security',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.',
        price: 'Desde $15 / 12 horas'
    },
    {
        title : 'Raptor Squad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.',
        price: 'Desde $15 / 12 horas'
    },
    {
        title : 'Power Rangers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.',
        price: 'Desde $15 / 12 horas'
    }
];

$.each(DATA,function(index,item){
    
    var html = ''
    + '<div class="card">'
        + '<h2> {{ title }} '
            + '<img class="card--certified" src="images/certified.svg">'
        + '</h2>'
        + '<hr class="solid">'
        + '<div class="card__column--one">'
            + '<img class="card__image" src="images/logo/chuck-norris.png">'
            + '<h3> {{ price }} </h3>'
        + '</div> '
        + '<div class="card__column--two">'
            + '<p> {{ description }} </p>'
            + '<button class="card__button">Contratar</button>'
       + '</div>'
    + '</div>';

    $('grid').append(Mustache.render(html,item));
}
)

Mustache.render(TEMPLATE,DATA);
