$.widget("custom.add_result",{
  options: {
	  dao:[],
	  condition_count:0,
	  test:'test'
  },
  _create: function() {
    var sep_r = $("<div/>");
    var label_r = $("<label/>");
    var input_group_r = $("<input/>");
    var label_dot_r = $("<label/>");
    var input_item_r = $("<input/>");
    var label_inst_r = $("<label/>");
    var select_inst_r = $("<select/>");
    var inst_option_r = $("<option/>");
    input_group_r.attr("id", "r_group");
    input_group_r.val("common_thermal_algorithm_result")
    input_group_r.attr("disabled", "disabled");
    label_dot_r.html(".");
    input_item_r.attr("id", "r_item");
    select_inst_r.attr("id", "r_inst");
    inst_option_r.html("1");
    inst_option_r.val("1");
    label_r.html("R:");
    label_inst_r.html("Inst:");
    label_r.appendTo(sep_r);
    input_group_r.appendTo(sep_r);
    label_dot_r.appendTo(sep_r);
    input_item_r.appendTo(sep_r);
    label_inst_r.appendTo(sep_r);
    inst_option_r.appendTo(select_inst_r);
    select_inst_r.appendTo(sep_r);
    sep_r.appendTo(this.element);
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
 }
});
