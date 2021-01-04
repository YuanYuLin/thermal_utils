$.widget("custom.add_condition",{
  options: {
	  dao:[],
	  ops:[],
	  inst:[],
	  condition_count:0,
	  test:'test'
  },
  _create: function() {
    this.add_more_condition=$("<a>", {
      text: "+"
    })
    .appendTo(this.element)
    .button();

    this._on(this.add_more_condition, {
      click: "add_a_condition"
    });
    console.log("Create \n");
  },
  change_group: function(event){
    console.log(this);
	var parendid = event.target.parentElement.id;
	var condition_select = $("#" + parendid + " > #condition_groups\\[\\]");
	var condition_select2 = $("#" + parendid + " > #condition_items\\[\\]");
	condition_select2.empty()
	var selected_value = condition_select.val();
    var _dao_list = this.options.dao;
    for(i=0;i<_dao_list.length;i++) {
      var _dao = _dao_list[i];
	  console.log(selected_value);
	  console.log(_dao.TDEV);
	  console.log(selected_value == _dao.TDEV);
      if(selected_value == _dao.TDEV) {
        for(j=0;j<_dao.DAO_LIST.length;j++) {
          sub_item = _dao.DAO_LIST[j];
          var sub_item_option = $("<option />");
          sub_item_option.html(sub_item);
          sub_item_option.val(sub_item);
          sub_item_option.appendTo(condition_select2);
        }
      }
      //condition_option.html(_dao.TDEV);
    }
  },
 _setOption: function(key, value) {
	if(key === "dao") {
		this.options.dao = value;
	}
	if(key === "ops") {
		this.options.ops = value;
	}
	if(key === "inst") {
		this.options.inst = value;
	}
 },
 _setOptions: function(options) {
	 var that = this;
	 $.each(options, function(key, value){
		 that._setOption(key, value);
	 });
 },
 add_a_condition: function(event){
    console.log("Add condition2\n");
    var sep = $("<div/>");
	sep.attr("id", "condition_container" + this.options.condition_count);
	this.options.condition_count+=1;
    var condition_select = $("<select  />");
    condition_select.attr("id", "condition_groups[]");
	this._on(condition_select, {
		change: "change_group"
	});
	var condition_select2 = $("<select  />");
	condition_select2.attr("id", "condition_items[]");

var condition_select3 = $("<select  />");
condition_select3.attr("id", "condition_ops[]");
var condition_select4 = $("<select  />");
condition_select4.attr("id", "condition_inst[]");
var condition_text = $("<input/>");
condition_text.attr("id", "condition_text[]");
    sep.appendTo(this.element);
   condition_select.appendTo(sep);
   condition_select4.appendTo(sep);	
   condition_select2.appendTo(sep);
   condition_select3.appendTo(sep);
   condition_text.appendTo(sep);	

var _dao_list = this.options.dao;
    for(i=0;i<_dao_list.length;i++){
	  var _dao = _dao_list[i];
      var condition_option = $("<option />");
	  condition_option.html(_dao.TDEV);
      condition_option.val(_dao.TDEV);
	  condition_option.appendTo(condition_select);
    }
	var _ops_list = this.options.ops;
	for(i=0;i<_ops_list.length;i++){
		var _ops = _ops_list[i];
		var condition_option = $("<option />");
		condition_option.html(_ops.DISPLAY);
      condition_option.val(_ops.NAME);
	  condition_option.appendTo(condition_select3);
	}
	var _inst_list = this.options.inst;
	for(i=0;i<_inst_list.length;i++){
		var _inst = _inst_list[i];
		var condition_option = $("<option />");
		condition_option.html(_inst.DISPLAY);
      condition_option.val(_inst.NAME);
	  condition_option.appendTo(condition_select4);
	}
  }
});

