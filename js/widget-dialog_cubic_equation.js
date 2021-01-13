    function _create_dialog_cubic_equation(el_root, alg_dao) {
	    var el_sep = $("<br/>");
	    var el_div = $("<div/>");
	    el_div.attr("id", "dialog_cubic_equation");

	    var el_label_cond = $("<label/>");
	    el_label_cond.html("Conditions");
	    el_label_cond.append(el_sep);
	    el_label_cond.appendTo(el_div);

	    var el_div_cond= $("<div/>");
	    el_div_cond.attr("id", "cubic_equation_place_holder_conditions");
	    el_div_cond.append(el_sep);
	    el_div_cond.appendTo(el_div);

	    var el_label_param = $("<label/>");
	    el_label_param.html("Paramesters");
	    el_label_param.append(el_sep);
	    el_label_param.appendTo(el_div);

	    var el_div_param= $("<div/>");
	    el_div_param.attr("id", "cubic_equation_place_holder_parameters");
	    el_div_param.append(el_sep);
	    el_div_param.appendTo(el_div);

	    var el_label_result = $("<label/>");
	    el_label_result.html("Result");
	    el_label_result.append(el_sep);
	    el_label_result.appendTo(el_div);

	    var el_div_result = $("<div/>");
	    el_div_result.attr("id", "cubic_equation_place_holder_result");
	    el_div_result.append(el_sep);
	    el_div_result.appendTo(el_div);

	    var el_label_fanmap = $("<label/>");
	    el_label_fanmap.html("Fan Map");
	    el_label_fanmap.append(el_sep);
	    el_label_fanmap.appendTo(el_div);

	    var el_div_fanmap = $("<div/>");
	    el_div_fanmap.attr("id", "cubic_equation_place_holder_fan_map");
	    el_div_fanmap.append(el_sep);
	    el_div_fanmap.appendTo(el_div);

	    el_div.appendTo(el_root);

    var dialog_cubic_equation = el_div.dialog({
      autoOpen: false,
      title: "Algorithm Cubic Equation [ R=A*(X^3) + B*(X^2) + C*(X^1) + D*(X^0) ]",
      modal: true,
      position:{my:"left top", at: "left top"},
      buttons:[
        {text: "Create", click: function() {
		  obj={};
		  var cond_list = $("#cubic_equation_place_holder_conditions").add_condition("outputjson");
		  var param_list = $("#cubic_equation_place_holder_parameters").add_parameter_cubic_equation("outputjson");
		  var result = $( "#cubic_equation_place_holder_result" ).add_result("outputjson");

		  obj.type = "cubic_equation";
		  obj.conds=cond_list;
		  obj.params= param_list;
		  obj.result = result;

		  alg_dao.push(obj);		  
		  
		  $("#cubic_equation_place_holder_conditions").add_condition("reset_widget");
		  $("#cubic_equation_place_holder_parameters").add_parameter_cubic_equation("reset_widget");
		  $("#cubic_equation_place_holder_result").add_result("reset_widget");
		  $("#place_holder_algorithm_list").list_algorithm("reset_widget");
		  
		  $("#place_holder_algorithm_list").list_algorithm("option", "dao", alg_dao);
		  $(this).dialog("close");
	}},
        {text: "Cancel", click: function() {
		  $("#cubic_equation_place_holder_conditions").add_condition("reset_widget");
		  $("#cubic_equation_place_holder_parameters").add_parameter_cubic_equation("reset_widget");
		  $("#cubic_equation_place_holder_result").add_result("reset_widget");
		  $("#place_holder_algorithm_list").list_algorithm("reset_widget");
		  
		  $("#place_holder_algorithm_list").list_algorithm("option", "dao", alg_dao);
		  $(this).dialog("close");
		}}
      ]
    });

    obj = {dialog: dialog_cubic_equation, data_source: function(dao) {
	  $("#cubic_equation_place_holder_conditions").add_condition();
	  $("#cubic_equation_place_holder_conditions").add_condition("option", "dao", dao);
          $("#cubic_equation_place_holder_parameters").add_parameter_cubic_equation();
          $("#cubic_equation_place_holder_parameters").add_parameter_cubic_equation("option", "dao", dao);
          $("#cubic_equation_place_holder_result").add_result();
          $("#cubic_equation_place_holder_result").add_result("option", "dao", dao);
    }}

    return obj;
    }

