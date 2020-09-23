$(function(){
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        const userInput = $(e.target).find($('input[name="shopping-list-entry"]')).val();
        $('ul').append('<li><span class="shopping-item">' + userInput + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    });
})

$(function(){
    $('ul').on('click', '.shopping-item-delete', function(e){
        e.stopPropagation();
        $(this).parents('li').remove();
    });
})

$(function(){
    $('ul').on('click', '.shopping-item-toggle', function(e){
        e.stopPropagation();
        $(this).parents('li').find('span.shopping-item').toggleClass('shopping-item__checked');
    })
})