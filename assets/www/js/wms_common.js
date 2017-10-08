//****************************************************************
//  Lookup List
//****************************************************************
function setLookupList(sel_object, lookup_type, msg_object)
{
    var v_sel_object = sel_object;
    var v_msg_object = msg_object;

    var dataString = 'lookup_type='+lookup_type;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxLookupList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.lookup_code+"'>"+ entry.lookup_name +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}

//****************************************************************
// Subinventory Information
//****************************************************************
function dispSubinvName(disp_object, org_id, subinv_code)
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
               disp_object.text(entry.subinv_descr);
            });
        }
    });
}

//****************************************************************
//  Locator List
//****************************************************************
function setLocatorList(sel_object, org_id, subinv_code, msg_object)
{
    var v_sel_object = sel_object;
    var v_msg_object = msg_object;

    var dataString = 'org_id='+org_id+'&subinv_code='+subinv_code;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxLocatorList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.locator_code+"'>"+ entry.locator_name +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>Error : </span>"+ data );
		}
	});
}

//****************************************************************
// Subinventory Information
//****************************************************************
function getItemSerialCode(val_object, org_id, item_code)
{
     var dataString = 'org_id='+org_id+'&item_code='+item_code;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxItemInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               val_object.text(entry.serial_code);
            });
        }
    });
}

//****************************************************************
// Subinventory Information
//****************************************************************
function getItemDescr(val_object, org_id, item_code)
{
     var dataString = 'org_id='+org_id+'&item_code='+item_code;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxItemInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               val_object.text(entry.item_descr+" "+entry.item_spec);
            });
        }
    });
}