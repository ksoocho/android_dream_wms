//****************************************************************
//  Check Login Main
//****************************************************************
function saveItemGroup( msg_object, item_group1, item_group2, item_group3, item_group4, item_group_descr )
{
    var v_org_id  = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

    var v_item_group_id = 0;
	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&item_group1='+item_group1
	                 +'&item_group2='+item_group2
	                 +'&item_group3='+item_group3
	                 +'&item_group4='+item_group4
	                 +'&item_group_descr='+item_group_descr
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxItemGroupSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_item_group_id = entry.item_group_id;
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>품목그룹 저장 성공</span>");
			} else {
				msg_object.html("<span style='color:#cc0000'>Error:</span>"+v_return_msg);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}

//****************************************************************
//  System Lookup List
//  2016.05.01  ksoocho  modified - master_organization_id
//****************************************************************
function dispItemGroupList(tbl_body_object, tbl_method, btn_object, item_group)
{

     var v_table = "";

    var v_org_id  = $.session.get('org_id');

    var dataString = 'org_id='+v_org_id
                       +'&item_group='+item_group;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/query/ajaxItemGroupList.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_table = v_table
                         + '<tr><td>'+entry.item_group1
                         +'-'+entry.item_group2
                         +'-'+entry.item_group3
                         +'-'+entry.item_group4
                         +'</td><td>'+entry.item_group_descr
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