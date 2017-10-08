//****************************************************************
//  Check Receipt
//****************************************************************
function validateTxnIssue( msg_object, subinv_code, locator_code, item_code, txn_qty, serial_no, serial_code, txn_type_id )
{

    var v_returnFlag = 'Y';

	if ( (subinv_code == null)
		 || (locator_code == null)
		 || (item_code == null)
		 || (txn_type_id == null))
	{
		msg_object.html("<span style='color:#cc0000'>Error: Invalid Input Value </span>");
        v_returnFlag = 'N';
	}

    if ( v_returnFlag == 'Y')
    {
		if ( serial_code == '5' )
		{
			if  ( serial_no == null )
			{
				msg_object.html("<span style='color:#cc0000'>Error: Invalid Serial </span>");
				v_returnFlag = 'N';
			}
		} else {
			if  ( txn_qty == null || txn_qty <= 0 )
			{
				msg_object.html("<span style='color:#cc0000'>Error: Invalid Qty </span>");
				v_returnFlag = 'N';
			}
		}
	}

	return v_returnFlag;

}

//****************************************************************
//  Save Issue Transaction
//****************************************************************
function saveTxnIssue( msg_object, subinv_code, locator_code, item_code, txn_qty, serial_no, txn_type_id, txn_reference )
{
    var v_org_id = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&subinv_code='+subinv_code
	                 +'&locator_code='+locator_code
	                 +'&item_code='+item_code
	                 +'&txn_qty='+txn_qty
	                 +'&serial_no ='+serial_no
	                 +'&txn_type_id='+txn_type_id
	                 +'&txn_reference='+txn_reference
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/issue/ajaxTxnIssueSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>Issue Transaction Success! </span>" );
			} else {
				msg_object.html("<span style='color:#cc0000'>Issue Transaction Error:</span>"+v_return_msg);
			}
		},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Issue Transaction Error : </span>"+ data );
		}
	});
}

//****************************************************************
//  Check Receipt
//****************************************************************
function validateTxnIssueLPN( msg_object, subinv_code, locator_code, lpn_code, txn_type_id )
{

    var v_returnFlag = 'Y';

	if ( (subinv_code == null)
		 || (locator_code == null)
		 || (lpn_code == null)
		 || (txn_type_id == null))
	{
		msg_object.html("<span style='color:#cc0000'>Error: Invalid Input Value </span>");
        v_returnFlag = 'N';
	}

	return v_returnFlag;
}

//****************************************************************
//  Save Issue Transaction
//****************************************************************
function saveTxnIssueLPN( msg_object, subinv_code, locator_code, lpn_code, txn_type_id, txn_reference )
{
    var v_org_id = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&subinv_code='+subinv_code
	                 +'&locator_code='+locator_code
	                 +'&lpn_code='+lpn_code
	                 +'&txn_type_id='+txn_type_id
	                 +'&txn_reference='+txn_reference
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/issue/ajaxTxnIssueLPNSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>Issue Transaction Success! </span>" );
			} else {
				msg_object.html("<span style='color:#cc0000'>Issue Transaction Error:</span>"+v_return_msg);
			}
		},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Issue Transaction Error : </span>"+ data );
		}
	});
}

