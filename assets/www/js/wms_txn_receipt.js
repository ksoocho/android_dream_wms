//****************************************************************
//  Check Receipt
//****************************************************************
function validateTxnReceipt( msg_object, subinv_code, locator_code, item_code, txn_qty, serial_no, serial_code, txn_type_id )
{

    var v_returnFlag = 'Y';

	if ( (subinv_code == null)
		 || (locator_code == null)
		 || (item_code == null)
		 || (txn_type_id == null))
	{
	    if  (subinv_code == null) {
		    msg_object.html("<span style='color:#cc0000'>Error: Invalid Subinv </span>");
	    }

	    if  (locator_code == null) {
		    msg_object.html("<span style='color:#cc0000'>Error: Invalid Locator </span>");
	    }

	    if  (item_code == null) {
		    msg_object.html("<span style='color:#cc0000'>Error: Invalid Item </span>");
	    }

	    if  (txn_type_id == null) {
		    msg_object.html("<span style='color:#cc0000'>Error: Invalid Transaction Type </span>");
	    }

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
//  Save Receipt Transaction
//****************************************************************
function saveTxnReceipt( msg_object, subinv_code, locator_code, item_code, txn_qty, serial_no, txn_type_id, txn_reference )
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
	                 +'&serial_no='+serial_no
	                 +'&txn_type_id='+txn_type_id
	                 +'&txn_reference='+txn_reference
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/receipt/ajaxTxnReceiptSave.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>Receipt Transaction Success! </span>" );
			} else {
				msg_object.html("<span style='color:#cc0000'>Receipt Transaction Error:</span>"+v_return_code+"-"+v_return_msg);
			}
		},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>Receipt Transaction Error : </span>"+ data );
		}
	});
}