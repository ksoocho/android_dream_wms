//****************************************************************
//  Function Name : validateTxnSubXfer
//  Description   : Subinventory Transfer Validation
// ---------------------------------------------------------
//  2016-03-30    ksoocho creation
//****************************************************************
function validateTxnSubXfer( msg_object, subinv_code, from_loc_code, to_loc_code, item_code, txn_qty, serial_no, serial_code )
{

    var v_returnFlag = 'Y';

	if ( (subinv_code == null)
		 || (from_loc_code == null)
		 || (to_loc_code == null)
		 || (item_code == null))
	{
		msg_object.html("<span style='color:#cc0000'>Validation Error: Invalid Input Value </span>");
        v_returnFlag = 'N';
	}

    if ( v_returnFlag == 'Y')
    {
		if ( serial_code == '5' )
		{
			if  ( v_serial_no == null )
			{
				msg_object.html("<span style='color:#cc0000'>Validation Error: Invalid Serial </span>");
				v_returnFlag = 'N';
			}
		} else {
			if  ( txn_qty == null || txn_qty <= 0 )
			{
				msg_object.html("<span style='color:#cc0000'>Validation Error: Invalid Qty </span>");
				v_returnFlag = 'N';
			}
		}
	}

	return v_returnFlag;

}

//****************************************************************
//  Function Name : saveTxnLocXfer
//  Description   : Subinventory Transfer Transaction
// ---------------------------------------------------------
//  2016-03-30    ksoocho creation
//****************************************************************
function saveTxnLocXfer( msg_object, subinv_code, from_loc_code, to_loc_code, item_code, txn_qty, serial_no, txn_reference )
{
    var v_org_id = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&subinv_code='+subinv_code
	                 +'&from_loc_code='+from_loc_code
	                 +'&to_loc_code='+to_loc_code
	                 +'&item_code='+item_code
	                 +'&txn_qty='+txn_qty
	                 +'&serial_no ='+serial_no
	                 +'&txn_reference='+txn_reference
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/subxfer/ajaxTxnLocXferSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>Locator Transfer Success! </span>" );
			} else {
				msg_object.html("<span style='color:#cc0000'>Locator Transfer Error:</span>"+v_return_msg);
			}
		},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Locator Transfer Error : </span>"+ data );
		}
	});
}

//****************************************************************
//  Function Name : validateTxnSubXferLPN
//  Description   : LPN Subinventory Transfer Validation
// ---------------------------------------------------------
//  2016-03-30    ksoocho creation
//****************************************************************
function validateTxnSubXferLPN( msg_object, subinv_code, from_loc_code, to_loc_code, lpn_code )
{

    var v_returnFlag = 'Y';

	if ( (subinv_code == null)
		 || (from_loc_code == null)
		 || (to_loc_code == null)
		 || (lpn_code == null))
	{
		msg_object.html("<span style='color:#cc0000'>Validation Error: Invalid Input Value </span>");
        v_returnFlag = 'N';
	}

	return v_returnFlag;

}

//****************************************************************
//  Function Name : saveTxnLocXferLPN
//  Description   : LPN Subinventory Transfer Transaction
// ---------------------------------------------------------
//  2016-03-30    ksoocho creation
//****************************************************************
function saveTxnLocXferLPN( msg_object, subinv_code, from_loc_code, to_loc_code, lpn_code, txn_reference )
{
    var v_org_id = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&subinv_code='+subinv_code
	                 +'&from_loc_code='+from_loc_code
	                 +'&to_loc_code='+to_loc_code
	                 +'&lpn_code='+lpn_code
	                 +'&txn_reference='+txn_reference
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/subxfer/ajaxTxnLocXferLPNSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>Locator Transfer Success! </span>" );
			} else {
				msg_object.html("<span style='color:#cc0000'>Locator Transfer Error:</span>"+v_return_msg);
			}
		},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Locator Transfer Error : </span>"+ data );
		}
	});
}

