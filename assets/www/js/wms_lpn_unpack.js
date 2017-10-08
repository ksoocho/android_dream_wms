//****************************************************************
// Validation
//****************************************************************
function validateLPNUnpack( msg_object, subinv_code, loc_code, item_code, lpn_code, txn_qty )
{

    var v_returnFlag = 'Y';

	if ( (subinv_code == null)
		 || (loc_code == null)
		 || (lpn_code == null)
		 || (item_code == null))
	{
		msg_object.html("<span style='color:#cc0000'>Validation Error: Invalid Input Value </span>");
        v_returnFlag = 'N';
	}

    if ( v_returnFlag == 'Y')
    {
		if  ( txn_qty == null || txn_qty <= 0 )
		{
			msg_object.html("<span style='color:#cc0000'>Validation Error: Invalid Qty </span>");
			v_returnFlag = 'N';
		}
	}

	return v_returnFlag;

}

//****************************************************************
// Unpack
//****************************************************************
function saveLPNUnpack( msg_object, subinv_code, loc_code, item_code, lpn_code, txn_qty, txn_reference )
{
    var v_org_id = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&subinv_code='+subinv_code
	                 +'&loc_code='+loc_code
	                 +'&item_code='+item_code
	                 +'&lpn_code='+lpn_code
	                 +'&txn_qty='+txn_qty
	                 +'&txn_reference='+txn_reference
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/lpn/ajaxLPNUnpack.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
				msg_object.html("<span style='color:#0000cc'>LPN Unpack Success! </span>" );
			} else {
				msg_object.html("<span style='color:#cc0000'>LPN Unpack Error:</span>"+v_return_msg);
			}
		},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
			msg_object.html("<span style='color:#cc0000'>LPN Unpack Error : </span>"+ data );
		}
	});
}