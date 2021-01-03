$.widget("custom.add_condition",{
  options: {
	  dao:[{TDEV:"na", DAO_LIST:[]}]
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
  add_a_condition: function(event){
    console.log("Add condition\n");
    var sep = $("<br/>");
    var condition_select = $("<select  />");
    condition_select.attr("id", "conditions[]");
    condition_select.change(function(){
    });
    sep.appendTo(this.element);
    condition_select.appendTo(this.element);
    for(i=0;i<this.element.options.dao.length;i++){
      console.log(dao[i]);
    }
  }
});
