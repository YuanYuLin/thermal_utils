$.widget("custom.add_parameter_cubic_equation",{
  options: {
	  dao:[],
	  condition_count:0,
	  test:'test'
  },
  outputjson:function() {
    params={};
    params.x={};

    var group_x = $("#x_group");
    var item_x = $("#x_item");
    var inst_x = $("#x_inst");
    var f_a =$("#field_a");
    var f_b =$("#field_b");
    var f_c =$("#field_c");
    var f_d =$("#field_d");

    params.x.keyprefix = group_x.val() + "." + item_x.val();
    params.x.inst = inst_x.val();
    params.a=f_a.val();
    params.b=f_b.val();
    params.c=f_c.val();
    params.d=f_d.val();
	return params;
  },
  reset_widget: function() {
    var f_a =$("#field_a");
	f_a.val('');
    var f_b =$("#field_b");
	f_b.val('');
    var f_c =$("#field_c");
	f_c.val('');
    var f_d =$("#field_d");
	f_d.val('');
  },
  change_group: function(event) {
    var select_group_x = $("#x_group");
    var select_sub_item_x = $("#x_item");
    var select_inst_x = $("#x_inst");
    select_sub_item_x.empty()
    select_inst_x.empty()
    var _dao_list = this.options.dao;
    var selected_value = select_group_x.val();
    var i = 0;
    var j = 0;
    for(i=0;i<_dao_list.length;i++) {
      var _dao = _dao_list[i];
      if(selected_value == _dao.TDEV) {
        for(j=0;j<_dao.DAO_LIST.length;j++) {
          item = _dao.DAO_LIST[j];
          var option = $("<option />");
          option.html(item);
          option.val(item);
          option.appendTo(select_sub_item_x);
	}
        for(j=0;j<_dao.INST_LIST.length;j++) {
          item = _dao.INST_LIST[j];
          var option = $("<option />");
          option.html(item.DISPLAY);
          option.val(item.NAME);
          option.appendTo(select_inst_x);
	}
      }
    }
  },
  _create: function() {
    var sep_x = $("<div/>");
    var label_x = $("<label/>");
    var select_group_x = $("<select/>");
    var select_sub_item_x = $("<select/>");
    var select_inst_x = $("<select/>");
    this._on(select_group_x, {
        change: "change_group"
    });
    select_group_x.attr("id", "x_group");
    select_sub_item_x.attr("id", "x_item");
    select_inst_x.attr("id", "x_inst");
    label_x.html("X:");
    label_x.appendTo(sep_x);
    select_group_x.appendTo(sep_x);
    select_sub_item_x.appendTo(sep_x);
    select_inst_x.appendTo(sep_x);
    sep_x.appendTo(this.element);

    var sep_a = $("<div/>");
    var label_a = $("<label/>");
    var input_a = $("<input/>");
    input_a.attr("id", "field_a");
    label_a.html("A:");
    label_a.appendTo(sep_a);
    input_a.appendTo(sep_a);
    sep_a.appendTo(this.element);

    var sep_b = $("<div/>");
    var label_b = $("<label/>");
    var input_b = $("<input/>");
    input_b.attr("id", "field_b");
    label_b.html("B:");
    label_b.appendTo(sep_b);
    input_b.appendTo(sep_b);
    sep_b.appendTo(this.element);

    var sep_c = $("<div/>");
    var label_c = $("<label/>");
    var input_c = $("<input/>");
    input_c.attr("id", "field_c");
    label_c.html("C:");
    label_c.appendTo(sep_c);
    input_c.appendTo(sep_c);
    sep_c.appendTo(this.element);

    var sep_d = $("<div/>");
    var label_d = $("<label/>");
    var input_d = $("<input/>");
    input_d.attr("id", "field_d");
    label_d.html("D:");
    label_d.appendTo(sep_d);
    input_d.appendTo(sep_d);
    sep_d.appendTo(this.element);

  },
 _setOption: function(key, value) {
	if(key === "dao") {
		this.options.dao = value;
    var select_group_x = $("#x_group");
	select_group_x.empty();
    var _dao_list = this.options.dao;
    var i = 0;
    for(i=0;i<_dao_list.length;i++) {
        var _dao = _dao_list[i];
        var option = $("<option />");
        option.html(_dao.TDEV);
        option.val(_dao.TDEV);
        option.appendTo(select_group_x);
    }
	}
 },
 _setOptions: function(options) {
	 var that = this;
	 $.each(options, function(key, value){
		 that._setOption(key, value);
	 });
 }
});
