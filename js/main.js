var app = new Framework7({
    root: '#app',
    name: 'fw7-app',
    id: 'fw7.app.base',
    panel: {
        swipe: 'left'
    },
    routes: [
        {
            path: '/about/',
            url: 'about.html'
        }
    ]
});

var mainView = app.views.create('.view-main');
