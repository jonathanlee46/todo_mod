console.log ("models are go");

var app = {};

app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggle: function(){
        this.save({ completed: !this.get('completed')});
    }
});
