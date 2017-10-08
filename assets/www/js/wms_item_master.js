//****************************************************************
//  Item Group List
//****************************************************************
function setItemGroupIDList(item_group1, item_group2, item_group3)
{
    var v_org_id  = $.session.get('org_id');
    var v_sel_object = $("#selectItemGroupID");
    var v_msg_object = $("#msgItemMaster");

    var dataString = 'org_id='+v_org_id
                      +'&item_group1='+item_group1
                      +'&item_group2='+item_group2
                      +'&item_group3='+item_group3 ;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxItemGroupIDList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.item_group_id+"'>"+ entry.item_group_descr +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}

//****************************************************************
//  Check Login Main
//****************************************************************
function saveItemMaster( item_group_id, item_descr, item_spec, item_type, serial_flag )
{
    var v_msg_object = $("#msgItemMaster");

    var v_org_id  = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

    var v_item_id = 0;
    var v_item_code = "";
	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&item_group_id='+item_group_id
	                 +'&item_descr='+item_descr
	                 +'&item_spec='+item_spec
	                 +'&item_type='+item_type
	                 +'&serial_flag='+serial_flag
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxItemMasterSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_item_id       = entry.item_id;
				v_item_code     = entry.item_code;
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
			     $('#dispItemCode').text(v_item_code);
				v_msg_object.html("<span style='color:#0000cc'>품목정보 저장 성공 - </span>" + v_item_code  );
			} else {
				v_msg_object.html("<span style='color:#cc0000'>Error:</span>"+v_return_msg);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}

//****************************************************************
//  System Lookup List
//****************************************************************
function dispItemMasterList(tbl_body_object, tbl_method, btn_object, item_group1, item_group2)
{

    var v_org_id  = $.session.get('org_id');

     var v_table = "";

    var dataString =  'org_id='+v_org_id
                       +'&item_group1='+item_group1
                       +'&item_group2='+item_group2;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/query/ajaxItemMasterList.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_table = v_table
                         + '<tr><td>'+entry.item_code
                         +'</td><td>'+entry.item_type
                         +'</td><td>'+entry.item_descr+ ' '+entry.item_spec
                         +'</td><td>'+entry.item_group_descr
                         +'</td><td>'+entry.serial_flag
                         +'</td></tr>';
            });
        }
    });

   tbl_body_object
          // Append the new rows to the body
          .append( v_table )
          // Call the refresh method
          .closest(tbl_method)
          .table( "refresh" )
          // Trigger if the new injected markup contain links or buttons that need to be enhanced
          .trigger( "create" );
      // We disable the button to make clear that in this demo we have only one set of rows to inject
    btn_object.button( "disable" );
}
