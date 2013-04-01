var Todo = Backbone.Model.extend({
  defaults: {
    'text': 'Default note',
    'completed': false
  },

  initialize: function() {
    // console.log('The Todo model has been initialized');
  },

  toggle: function() {
    this.set('completed', !this.get('completed'));
  }

});


