
//****************************************************************
//  Menu List
//****************************************************************
function displayMenuList(subinv_type)
{

     listMenu = "";

     var dataString = 'subinv_type='+subinv_type;

    $.ajax({
        type: "POST",
        url: "http://cksoonew.cafe24.com/cks_dream_wms/ajax/login/ajaxMenuList.php",
        data: dataString,
        cache: false,
        dataType:'json',
        async: false,
        success: function(data) {
            $.each(data, function(index, entry) {
               listMenu = listMenu + '<li><a href='+entry.web_call+entry.web_parameter+' data-ajax=false >'
                                   + entry.func_name
                                   + '</a></li>';
            });
        }
    });

      $("#menu_list").html(listMenu);
      $('#menu_list').trigger('create');
      $('#menu_list').listview('refresh');
}