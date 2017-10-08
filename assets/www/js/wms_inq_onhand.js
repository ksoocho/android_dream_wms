//****************************************************************
//  Onhand List
//****************************************************************
function dispLocOnhandList(subinv_code, locator_code)
{

    var v_org_id  = $.session.get('org_id');

     var v_table = "";

    var dataString = 'org_id='+v_org_id
    	             +'&subinv_code='+subinv_code
    	             +'&locator_code='+locator_code ;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/query/ajaxLocOnhandList.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_table = v_table
                         + '<tr><td>'+entry.item_code
                         +'</td><td>'+entry.item_descr
                         +'</td><td>'+entry.item_group_descr
                         +'</td><td>'+entry.lpn_code
                         +'</td><td>'+entry.onhand_qty
                         +'</td></tr>';
            });
        }
    });

    $( "table#tblLocOnhand tbody" )
          // Append the new rows to the body
          .append( v_table )
          // Call the refresh method
          .closest( "table#tblLocOnhand" )
          .table( "refresh" )
          // Trigger if the new injected markup contain links or buttons that need to be enhanced
          .trigger( "create" );
      // We disable the button to make clear that in this demo we have only one set of rows to inject
    $( "#btnLoc" ).button( "disable" );
}

//****************************************************************
//  Onhand List
//****************************************************************
function dispItemOnhandList(subinv_code, item_code)
{

    var v_org_id  = $.session.get('org_id');

     var v_table = "";

    var dataString = 'org_id='+v_org_id
    	             +'&subinv_code='+subinv_code
    	             +'&item_code='+item_code ;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/query/ajaxItemOnhandList.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_table = v_table
                         +'<tr><td>'+entry.locator_code
                         +'</td><td>'+entry.lpn_code
                         +'</td><td>'+entry.onhand_qty
                         +'</td></tr>';
            });
        }
    });

    $( "table#tblItemOnhand tbody" )
          // Append the new rows to the body
          .append( v_table )
          // Call the refresh method
          .closest( "table#tblItemOnhand" )
          .table( "refresh" )
          // Trigger if the new injected markup contain links or buttons that need to be enhanced
          .trigger( "create" );
      // We disable the button to make clear that in this demo we have only one set of rows to inject
    $( "#btnItem" ).button( "disable" );
}

//****************************************************************
//  Onhand List
//****************************************************************
function dispSerialOnhandList(subinv_code, item_code)
{

    var v_org_id  = $.session.get('org_id');

     var v_table = "";

    var dataString = 'org_id='+v_org_id
    	             +'&subinv_code='+subinv_code
    	             +'&item_code='+item_code ;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/query/ajaxSerialOnhandList.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_table = v_table
                         +'<tr><td>'+entry.serial_no
                         +'</td><td>'+entry.locator_code
                         +'</td><td>'+entry.item_code
                         +'</td><td>'+entry.item_descr
                         +'</td><td>'+entry.serial_descr
                         +'</td></tr>';
            });
        }
    });

    $( "table#tblItemOnhand tbody" )
          // Append the new rows to the body
          .append( v_table )
          // Call the refresh method
          .closest( "table#tblItemOnhand" )
          .table( "refresh" )
          // Trigger if the new injected markup contain links or buttons that need to be enhanced
          .trigger( "create" );
      // We disable the button to make clear that in this demo we have only one set of rows to inject
    $( "#btnItem" ).button( "disable" );
}