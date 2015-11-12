app.Router = Backbone.Router.extend({
    routes: {
        '*filter' : 'setFilter'
    },
    setFilter: function(params) {
        console.log('app.router.params = ' + params);
        window.filter = params.trim() || '';
        app.todoList.trigger('reset');
    }
});  

app.router = new app.Router();
    Backbone.history.start();    
    app.appView = new app.AppView(); 