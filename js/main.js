(function(window) {

var TMPL = '<span>Hello label={{label}} run()={{run() || "NG"}}</span>';

var plainObject = {
  label: 'PlainObject#1',
  run: function() {
    return 'OK';
  }
};

var DataType = Backbone.Model.extend({
  run: function() {
    return 'OK';
  }
});

var dataObject = new DataType({
  label: 'BackboneModel',
});

var r1 = new Ractive({
  el: '#stage1',
  template: TMPL,
  adapt: [ 'Backbone' ],
  data: plainObject
});

var r2 = new Ractive({
  el: '#stage2',
  template: TMPL,
  adapt: [ 'Backbone' ],
  data: dataObject
});

})(window);
