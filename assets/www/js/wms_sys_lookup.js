//****************************************************************
//  Item Group List
//****************************************************************
function setLookupTypeList(sel_object, msg_object)
{
    var dataString = '';

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxLookupTypeList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.lookup_code+"'>"+ entry.lookup_name +"</option>";
		    });

		   sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}

//****************************************************************
// Responsibility Information
//****************************************************************
function getParentLookupInfo(lookup_type, lookup_code)
{
     var dataString = 'lookup_type='+lookup_type+'&lookup_code='+lookup_code;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxLookupInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        success: function(data) {
            $.each(data, function(index, entry) {
               $('#valParentType').val(entry.parent_lookup_code);
               $('#valParentType').textinput('disable');
               $('#dispParentType').text(entry.parent_lookup_name);
            });
        }
    });

}
//****************************************************************
//  Check Login Main
//****************************************************************
function saveLookup( msg_object,lookup_type, lookup_code, lookup_meaning, lookup_descr, parent_type, parent_code )
{
    var v_user_id = $.session.get('user_id');

	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'lookup_type='+lookup_type
	                 +'&lookup_code='+lookup_code
	                 +'&lookup_meaning='+lookup_meaning
	                 +'&lookup_descr='+lookup_descr
	                 +'&parent_type='+parent_type
	                 +'&parent_code='+parent_code
	                 +'&user_id='+v_user_id ;

    alert(dataString);

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxLookupSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>Lookup Registration Success! </span>" );
			} else {
				msg_object.html("<span style='color:#cc0000'>Lookup Registration Error:</span>"+v_return_msg);
			}
		},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Lookup Registration Error : </span>"+ data );
		}
	});
}

//****************************************************************
//  System Lookup List
//****************************************************************
function dispSysLookupList(tbl_body_object, tbl_method, btn_object, lookup_type)
{

     var v_table = "";

    var dataString = 'lookup_type='+lookup_type;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/query/ajaxSysLookupList.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_table = v_table
                         + '<tr><td>'+entry.lookup_code
                         +'</td><td>'+entry.lookup_meaning
                         +'</td><td>'+entry.lookup_descr
                         +'</td><td>'+entry.parent_lookup_type
                         +'</td><td>'+entry.parent_lookup_code
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