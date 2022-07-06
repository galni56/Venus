// test-delete-after;

function init(){
    let template = `<li><a href="#">%name</a></li>`,
        search   = document.querySelector('#search'),
        list     = document.querySelector('#list'),
        names    = ['Анастасия', 'Александр', 'Борис', 'Андрей', 'Павел'],

    search.addEventListener('input', function(e){
        let value = search.value.toLowerCase();

        render(names.filter(e => e.toLowerCase().startsWith(value)));
    });
    render(names);
}

//document.addEventListener('DOMContentLoaded', init);
init();