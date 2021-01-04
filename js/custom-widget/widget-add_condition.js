$.widget("custom.add_condition",{
  options: {
	  dao:[],
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
  outputjson:function() {
    var cond_list = [];
    var groups = $("#condition_groups\\[\\]");
    var items = $("#condition_items\\[\\]");
    var ops_list = $("#condition_ops\\[\\]");
    var inst_list =$("#condition_inst\\[\\]");
    var text_list =$("#condition_text\\[\\]");
    for(i=0;i<groups.length;i++){
      var group = groups[i];
      var item = items[i];
      var ops = ops_list[i];
      var inst = inst_list[i];
      var text = text_list[i];
      var cond = {};
      cond.keyprefix=group.value + "." + item.value;
      cond.instance = inst.value;
      cond.ops = ops.value;
      cond.value = text.value;
      cond_list.push(cond);
    }
    return cond_list;
  },
  change_group: function(event){
    console.log(this);
	var parentid = event.target.parentElement.id;
	var condition_select = $("#" + parentid + " > #condition_groups\\[\\]");
	var condition_select2 = $("#" + parentid + " > #condition_items\\[\\]");
        var condition_select3 = $("#" + parentid + " > #condition_ops\\[\\]");
        var condition_select4 = $("#" + parentid + " > #condition_inst\\[\\]");
	condition_select2.empty()
	condition_select3.empty()
	condition_select4.empty()
	var selected_value = condition_select.val();
    var _dao_list = this.options.dao;
    for(i=0;i<_dao_list.length;i++) {
      var _dao = _dao_list[i];
      if(selected_value == _dao.TDEV) {
        for(j=0;j<_dao.DAO_LIST.length;j++) {
          sub_item = _dao.DAO_LIST[j];
          var sub_item_option = $("<option />");
          sub_item_option.html(sub_item);
          sub_item_option.val(sub_item);
          sub_item_option.appendTo(condition_select2);
        }
        for(j=0;j<_dao.OPS_LIST.length;j++) {
          _item = _dao.OPS_LIST[j];
          var _option = $("<option />");
          _option.html(_item.DISPLAY);
          _option.val(_item.NAME);
          _option.appendTo(condition_select3);
	}
        for(j=0;j<_dao.INST_LIST.length;j++) {
          _item = _dao.INST_LIST[j];
          var _option = $("<option />");
          _option.html(_item.DISPLAY);
          _option.val(_item.NAME);
          _option.appendTo(condition_select4);
	}
      }
    }
  },
 _setOption: function(key, value) {
	if(key === "dao") {
		this.options.dao = value;
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
condition_text.width(30);
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
  }
});
