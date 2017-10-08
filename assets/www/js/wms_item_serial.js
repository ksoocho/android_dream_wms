//****************************************************************
//  Check Login Main
//****************************************************************
function generateSerial( item_code, serial_descr )
{
    var v_org_id  = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

    var v_serial_no     = "";
	var v_return_code   = "";
	var v_return_msg    = "";

	var dataString = 'org_id='+v_org_id
	                 +'&item_code='+item_code
	                 +'&serial_descr='+serial_descr
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxSerialGenerate.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_serial_no     = entry.serial_no;
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
                $('#dispSerialNo').text(v_serial_no);
				$("#msgItemSerial").html("<span style='color:#0000cc'>Serial 생성 성공 - </span>"+v_serial_no );
			} else {
				$("#msgItemSerial").html("<span style='color:#cc0000'>Error:</span>"+v_return_msg);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#msgItemSerial").html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}
