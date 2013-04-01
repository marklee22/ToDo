TodoEntryView = Backbone.View.extend({
  tagName: 'div',
  className: 'todoEntry',
  template: _.template('<%=completed%> - <%= text %>'),

  events: {
    'click': 'toggleNote'
  },

  initialize: function() {
    this.listenTo(this.model,'change',this.render);
    // console.log('Initialized TodoView');
    this.model.on('change', this.render, this);
  },

  toggleNote: function() {
    this.model.toggle();
  },

  render: function() {
    // $('#todo-list').append(this.template(this.model.attributes));
    console.log(this.template(this.model.attributes));
    return this.$el.html(this.template(this.model.attributes));
  }

});