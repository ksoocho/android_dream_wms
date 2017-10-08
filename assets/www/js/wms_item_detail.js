function isUploadSupported() {
    if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
        return false;
    }
    var elem = document.createElement('input');
    elem.type = 'file';
    return !elem.disabled;
};

function readFile(file) {
	var reader = new FileReader();

	reader.onloadend = function () {
		processFile(reader.result, file.type);
	}

	reader.onerror = function () {
		alert('There was an error reading the file!');
	}

	reader.readAsDataURL(file);
}

function processFile(dataURL, fileType) {
	var maxWidth = 300;
	var maxHeight = 300;

	var image = new Image();
	image.src = dataURL;

	image.onload = function () {
		var width = image.width;
		var height = image.height;
		var shouldResize = (width > maxWidth) || (height > maxHeight);

		if (!shouldResize) {
			sendFile(dataURL);
			return;
		}

		var newWidth;
		var newHeight;

		if (width > height) {
			newHeight = height * (maxWidth / width);
			newWidth = maxWidth;
		} else {
			newWidth = width * (maxHeight / height);
			newHeight = maxHeight;
		}

		var canvas = document.createElement('canvas');

		canvas.width = newWidth;
		canvas.height = newHeight;

		var context = canvas.getContext('2d');

		context.drawImage(this, 0, 0, newWidth, newHeight);

		dataURL = canvas.toDataURL(fileType);

		sendFile(dataURL);
	};

	image.onerror = function () {
		alert('There was an error processing your file!');
	};
}

function sendFile(fileData) {

	 //var formData = new FormData();

     var formData = $("#itemDetailForm").serialize();

	 formData.append('item_image', fileData);

    // var dataString = 'item_id='+item_id+'&plan_doc_no='+plan_doc_no+'&item_image='+fileData;

	$.ajax({
		type: 'POST',
		url: 'http://cksoonew.cafe24.com/cks_dream_wms/ajax/item/ajaxItemMasterUpdate.php',
		data: formData,
		contentType: false,
		processData: false,
		success: function (data) {
			if (data.success) {
				$("#msgItemDetail").html("<span style='color:#0000cc'>Your file was successfully uploaded!</span>" );
			} else {
				$("#msgItemDetail").html("<span style='color:#cc0000'>There was an error uploading your file!</span>" );
			}
		},
		error: function (data) {
				$("#msgItemDetail").html("<span style='color:#cc0000'>There was an error uploading your file!</span>"+ data );
		}
	});
}
