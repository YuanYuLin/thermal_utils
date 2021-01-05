$.widget("custom.list_algorithm",{
  options: {
	  dao:[],
	  condition_count:0,
	  test:'test'
  },
  outputjson: function() {
	obj = {};
	return obj;
  },
  reset_widget: function() {
	  
  },
  ops2symbo: function(ops) {
	  switch(ops) {
		  case "OPS_EQ":
		  return "==";
		  case "OPS_GE":
		  return ">=";
		  case "OPS_LE":
		  return "<=";
	  }
	  return "OPS not supportted!";
  },
  create_record_cubic_equation: function(root_element, item) {
	  var _conds = item.conds;
	  var _params = item.params;
	  var _result = item.result;

	  var _type_label = $("<label/>");
	  _type_label.appendTo(root_element);
	  var ul_cond = $("<ul/>");
	  ul_cond.appendTo(root_element);
	  for(i=0;i<_conds.length;i++) {
		  var cond = _conds[i];
		  var li_cond = $("<li/>");
		  li_cond.html(cond.keyprefix + "." + cond.instance + this.ops2symbo(cond.ops) + cond.value);
		  li_cond.appendTo(ul_cond);
	  }
	  for(i=0;i<_params.length;i++) {
		  var param = _params[i];
		  var label_x = $("<label/>");
		  label_x.html("X:"+param.x.keyprefix + "." + param.x.inst);
		  label_x.appendTo(root_element);
		  var label_a = $("<label/>");
		  label_a.html("A:"+param.a);
		  label_a.appendTo(root_element);
		  var label_b = $("<label/>");
		  label_b.html("B:"+param.b);
		  label_b.appendTo(root_element);
		  var label_c = $("<label/>");
		  label_c.html("C:"+param.c);
		  label_c.appendTo(root_element);
		  var label_d = $("<label/>");
		  label_d.html("D:"+param.d);
		  label_d.appendTo(root_element);
	  }
	  var label_r = $("<label/>");
	  label_r.html("R:" + _result.keyprefix + "." + _result.inst);
	  label_r.appendTo(root_element);
  },
  render_list: function() {
    var ul = $("#algorithm_list");
	ul.empty();
	var _dao = this.options.dao;
	
    for(i=0;i<_dao.length;i++) {
      var item = _dao[i];
	  console.log(item.type);
	  console.log(item.conds);
	  console.log(item.params);
	  console.log(item.result);
	  var _type = item.type;
  	  var root_element = $("<li/>");
	  var label_type = $("<label/>");
	  label_type.html(_type);
	  label_type.appendTo(root_element);
	  switch(_type) {
		  case 'cubic_equation':
		  this.create_record_cubic_equation(root_element, item);
		  break;
	  }

	  root_element.appendTo(ul);
    }
/*
    for(i=0;i<_dao.length;i++) {
      var item = _dao[i];
	  console.log(item);
      var li=$("<li/>");
	  var up=$("<label/>");
	  var down=$("<label/>");
	  var label=$("<label/>");
	  up.attr("class", "ui-icon ui-icon-triangle-1-n");
	  up.html("up");
	  down.attr("class", "ui-icon ui-icon-triangle-1-s");
	  down.html("down");
	  li.attr("class", "ui-state-default");
	  up.appendTo(li);
	  down.appendTo(li);
	  label.html(item.type);
	  label.appendTo(li);
	  li.appendTo(ul);
	}
*/
  },
  _create: function() {
	  var ul=$("<ul/>");
	  ul.attr("id", "algorithm_list");
	  ul.empty();
	  ul.appendTo(this.element);
  },
 _setOption: function(key, value) {
	if(key === "dao") {
		this.options.dao = value;
		this.render_list();
	}
 },
 _setOptions: function(options) {
	 var that = this;
	 $.each(options, function(key, value){
		 that._setOption(key, value);
	 });
 }
});
