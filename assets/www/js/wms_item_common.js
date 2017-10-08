//****************************************************************
//  Item Group List
//  2016.05.01   ksoocho   modified - master_organization_id
//****************************************************************
function setItemGroupList(sel_item_group, group_type, group_code, msg_item_group)
{
    var v_org_id     = 1001; //$.session.get('org_id');
    var v_sel_object = sel_item_group;
    var v_msg_object = msg_item_group;

    var dataString = 'org_id='+v_org_id
                     +'&group_type='+group_type
                     +'&group_code='+group_code;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxItemGroupList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.item_group_code+"'>"+ entry.item_group_name +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>System Error!! </span>"+ textStatus );
		}
	});
}


//****************************************************************
//  Item ID List
//****************************************************************
function setItemIDList(sel_item, item_group1, item_group2, item_group3, msg_item)
{

    var v_sel_object = sel_item;
    var v_msg_object = msg_item;

    var v_org_id  = $.session.get('org_id');

    var dataString = 'org_id='+v_org_id
                      +'&item_group1='+item_group1
                      +'&item_group2='+item_group2
                      +'&item_group3='+item_group3 ;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxItemIDList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.item_id+"'>"+ entry.item_code +'/'+ entry.item_descr +'/'+ entry.item_spec +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>System Error!! </span>" );
		}
	});
}

//****************************************************************
//  Item Code List
//****************************************************************
function setItemCodeList(sel_item, item_group1, item_group2, item_group3, msg_item)
{

    var v_sel_object = sel_item;
    var v_msg_object = msg_item;

    var v_org_id  = $.session.get('org_id');

    var dataString = 'org_id='+v_org_id
                      +'&item_group1='+item_group1
                      +'&item_group2='+item_group2
                      +'&item_group3='+item_group3 ;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxItemIDList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.item_code+"'>"+ entry.item_descr +'/'+ entry.item_spec +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>System Error!! </span>" );
		}
	});
}

//****************************************************************
//  Serial Item ID List
//****************************************************************
function setSerialItemIDList(sel_item, item_group1, item_group2, item_group3, msg_item)
{
    var v_sel_object = sel_item;
    var v_msg_object = msg_item;

    var v_org_id  = $.session.get('org_id');

    var dataString = 'org_id='+v_org_id
                      +'&item_group1='+item_group1
                      +'&item_group2='+item_group2
                      +'&item_group3='+item_group3 ;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxSerialItemIDList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.item_id+"'>"+ entry.item_code +'/'+ entry.item_descr +'/'+ entry.item_spec +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>System Error!! </span>" );
		}
	});
}

//****************************************************************
//  Serial Item Code List
//****************************************************************
function setSerialItemCodeList(sel_item, item_group1, item_group2, item_group3, msg_item)
{
    var v_sel_object = sel_item;
    var v_msg_object = msg_item;

    var v_org_id  = $.session.get('org_id');

    var dataString = 'org_id='+v_org_id
                      +'&item_group1='+item_group1
                      +'&item_group2='+item_group2
                      +'&item_group3='+item_group3 ;

	$.ajax({
		type: "POST",
		url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxSerialItemIDList.php",
		data: dataString,
		cache: false,
		dataType:'json',
		success: function(data) {

		   var v_option = "<option value=choose-one data-placeholder=true>Choose one...</option>";

		   v_sel_object.empty();

		    $.each(data, function(index, entry) {
				v_option += "<option value='"+entry.item_code+"'>"+ entry.item_descr +'/'+ entry.item_spec +"</option>";
		    });

		   v_sel_object.append(v_option);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			v_msg_object.html("<span style='color:#cc0000'>System Error!! </span>" );
		}
	});
}