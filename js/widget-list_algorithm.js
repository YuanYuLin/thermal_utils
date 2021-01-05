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
  _create_record_cubic_equation: function(row, item) {
	  var _type = item.type;
	  var _conds = item.conds;
	  var _params = item.params;
	  var _result = item.result;

	  var col_type = $("<td/>");
	  var _type_label = $("<label/>");
	  _type_label.html(_type);
	  _type_label.appendTo(col_type);
	  col_type.appendTo(row);

	  var col_cond = $("<td/>");
	  var x = 0;
	  for(x=0;x<_conds.length;x++) {
		  var cond = _conds[x];
		  var label_cond = $("<label/>");
		  label_cond.html("<br/>" + cond.keyprefix + "." + cond.instance + this.ops2symbo(cond.ops) + cond.value);
		  label_cond.appendTo(col_cond);
	  }
	  col_cond.appendTo(row);

	  var col_param = $("<td/>");
	  var label_x = $("<label/>");
	  label_x.html("<br/>X:"+_params.x.keyprefix + "." + _params.x.inst);
	  label_x.appendTo(col_param);
	  var label_a = $("<label/>");
	  label_a.html("<br/>A:"+_params.a);
	  label_a.appendTo(col_param);
	  var label_b = $("<label/>");
	  label_b.html("<br/>B:"+_params.b);
	  label_b.appendTo(col_param);
	  var label_c = $("<label/>");
	  label_c.html("<br/>C:"+_params.c);
	  label_c.appendTo(col_param);
	  var label_d = $("<label/>");
	  label_d.html("<br/>D:"+_params.d);
	  label_d.appendTo(col_param);
	  col_param.appendTo(row);

	  var col_result = $("<td/>");
	  var label_r = $("<label/>");
	  label_r.html("R:" + _result.keyprefix + "." + _result.inst);
	  label_r.appendTo(col_result);
	  col_result.appendTo(row);

	  var col_action =$("<td/>");
	  col_action.appendTo(row);
  },
  _create_caption: function(table) {
	  var tr = $("<tr/>");

	  var th_type = $("<th/>");
	  th_type.html("Type");
	  th_type.appendTo(tr);

	  var th_conds = $("<th/>");
	  th_conds.html("Condition List");
	  th_conds.appendTo(tr);

	  var th_params = $("<th/>");
	  th_params.html("Parameter List");
	  th_params.appendTo(tr);

	  var th_result = $("<th/>");
	  th_result.html("Result");
	  th_result.appendTo(tr);

	  var th_action = $("<th/>");
	  th_action.html("Action List");
	  th_action.appendTo(tr);

	  tr.appendTo(table);

  },
  render_list: function() {
    var table = $("#algorithm_list");
	table.empty();
	  this._create_caption(table);

	var _dao = this.options.dao;
	  var i = 0;
    for(i=0;i<_dao.length;i++) {
      var obj = _dao[i];
	  var _type = obj.type;
  	  var row = $("<tr/>");
	  if(_type === "cubic_equation") {
		  this._create_record_cubic_equation(row, obj);
	  }

	  row.appendTo(table);
    }
	  this._create_caption(table);
  },
  _create: function() {
	  var table=$("<table/>");
	  table.attr("id", "algorithm_list");
	  table.empty();

	  table.appendTo(this.element);
	  this.render_list();
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
