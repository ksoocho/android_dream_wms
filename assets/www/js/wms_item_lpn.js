//****************************************************************
//  Check Login Main
//****************************************************************
function generateLPN( lpn_type )
{
    var v_org_id  = $.session.get('org_id');
    var v_user_id = $.session.get('user_id');

    var v_lpn_id        = 0;
    var v_lpn_code      = "0";
	var v_return_code   = "0";
	var v_return_msg    = "0";

	var dataString = 'org_id='+v_org_id
	                 +'&lpn_type='+lpn_type
	                 +'&user_id='+v_user_id ;

	$.ajax({
	type: "POST",
	url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxLPNGenerate.php",
	data: dataString,
	cache: false,
	dataType:"JSON",
	success: function(data){
			$.each(data, function(index, entry) {
				v_lpn_id        = entry.lpn_id;
				v_lpn_code      = entry.lpn_code;
				v_return_code   = entry.return_code;
				v_return_msg    = entry.return_msg;
			});

			if (v_return_code == "S"){
                $('#dispLPN').text(v_lpn_code);
				$("#msgLPN").html("<span style='color:#0000cc'>LPN 생성 성공 - </span>"+v_lpn_code );
			} else {
				$("#msgLPN").html("<span style='color:#cc0000'>Error:</span>"+v_return_msg);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#msgLPN").html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}
