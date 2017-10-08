//****************************************************************
// Validation Check : Item Code
//****************************************************************
function checkItemCode( org_id, item_code )
{
     var dataString = 'org_id='+org_id+'&item_code='+item_code;
     var returnFlag = 'N';

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxItemInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_item_id = entry.item_id;
               if ( v_item_id > 0 )
               {
                  returnFlag = 'Y';
               }
            });
        }
    });

    return returnFlag;
}

//****************************************************************
// Validation Check : Locator Code
//****************************************************************
function checkLocCode( org_id, subinv_code, loc_code )
{
     var dataString = 'org_id='+org_id+'&subinv_code='+subinv_code+'&loc_code='+loc_code;
     var returnFlag = 'N';

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxLocatorInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               v_locator_id = entry.locator_id;
               if ( v_locator_id > 0 )
               {
                  returnFlag = 'Y';
               }
            });
        }
    });

    return returnFlag;
}

//****************************************************************
// Validation Check : Serial No
//****************************************************************
function checkSerialNo( org_id, subinv_code, loc_code, item_code, serial_no )
{
     var dataString = 'serial_no='+serial_no;
     var returnFlag = 'N';

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxSerialInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {

               v_item_code   = entry.item_code;
               v_org_id      = entry.org_id;
               v_subinv_code = entry.subinv_code;
               v_loc_code    = entry.loc_code;

               if ( item_code == v_item_code
                    && org_id == v_org_id
                    && subinv_code == v_subinv_code
                    && loc_code ==  v_loc_code
                  )
               {
                  returnFlag = 'Y';
               }
            });
        }
    });

    return returnFlag;
}


//****************************************************************
// Validation Check : LPN
//****************************************************************
function checkLPN( org_id, lpn_no )
{
     var dataString = 'org_id='+org_id+'&lpn_no='+lpn_no;
     var returnFlag = 'N';

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/common/ajaxLPNInfo.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {

               v_lpn_id   = entry.lpn_id;

               if ( v_lpn_id > 0 )
               {
                  returnFlag = 'Y';
               }
            });
        }
    });

    return returnFlag;
}