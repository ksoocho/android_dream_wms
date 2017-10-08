//****************************************************************
//  Check Login Main
//****************************************************************
function check_login( usercode, password ){

    var userId = 0;
	var returnCode = "";

	var dataString = 'usercode='+usercode+'&password='+password;

	if($.trim(usercode).length > 0 && $.trim(password).length > 0)
	{

		$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/login/ajaxWMSLogin.php",
		data: dataString,
		cache: false,
		dataType:"JSON",
		success: function(data){

				$.each(data, function(index, entry) {
					userId = entry.user_id;
					returnCode = entry.return_code;
				});

				if (returnCode == "S"){

					$.session.set('user_id'   , userId);
					$.session.set('user_code', usercode);

					localStorage.setItem('user_id'   , userId);
					localStorage.setItem('user_code', usercode);

					$(':mobile-pagecontainer').pagecontainer('change', '#pageWMSHome', {
						transition: 'flip',
						changeHash: false,
						reverse: true,
						showLoadMsg: true
					});

				} else {
					$.session.clear();
					$("#errorLogin").html("<span style='color:#cc0000'>Error:</span> Invalid User ID / Password.");
				}
		    }
		});

	} else {
		$.session.clear();
		$("#errorLogin").html("<span style='color:#cc0000'>Error:</span> Invalid User ID or Password");
	}

}

function validateLogin(usercode, password){

	if(usercode == '' || usercode == null){
		$("#errorLogin").html("<span style='color:#cc0000'>Error:</span> Invalid User ID");
		$("#b_usercode").focus();
		return false;
	}
	if(password == '' || password == null){
		$("#errorLogin").html("<span style='color:#cc0000'>Error:</span> Invalid Password");
		$("#b_password").focus();
		return false;
	}
	return true;
}

//****************************************************************
//  User Responsibility
//****************************************************************

function setRespList(user_id)
{
    var dataString = 'user_id='+user_id;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/login/ajaxRespList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var selectResp = $("#selectStageResp");
		   var optionResp = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   selectResp.empty();

		    $.each(data, function(index, entry) {
				optionResp += "<option value='"+entry.resp_id+"'>"+ entry.resp_name +"</option>";
		    });

		   selectResp.append(optionResp);

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#msgStageError").html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}

//****************************************************************
//  Subinventory List
//****************************************************************
function setSubinvList(resp_id)
{
    var dataString = 'resp_id='+resp_id;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/login/ajaxSubinvList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var selectSubinv = $("#selectStageSubinv");
		   var optionSubinv = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   selectSubinv.empty();

		    $.each(data, function(index, entry) {
				optionSubinv += "<option value='"+entry.subinv_code+"'>"+ entry.subinv_name +"</option>";
		    });

		   selectSubinv.append(optionSubinv);

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#msgStageError").html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}
//****************************************************************
// Responsibility Information
//****************************************************************
function getRespInfo(resp_id)
{
     var dataString = 'resp_id='+resp_id;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxRespInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               $.session.set('org_id', entry.org_id);
               $.session.set('subinv_type', entry.subinv_type);
            });
        }
    });
}

//****************************************************************
// Subinventory Information
//****************************************************************
function getSubinvInfo(org_id, subinv_code)
{
     var dataString = 'org_id='+org_id+'&subinv_code='+subinv_code;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxSubinvInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               $.session.set('subinv_type', entry.subinv_type);
            });
        }
    });
}

