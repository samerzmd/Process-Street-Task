angular.module('myApp').component('psUploader', {
    templateUrl: './components/ps-uploader/psUploader.html',
    controller: function() {
        this.$onInit = function() {
            $('#fileupload').fileupload({
                url: 'https://upload.wistia.com?api_password=*****',
                dataType: 'json',
                done: function (e, data) {
                  console.log("http://fast.wistia.net/embed/iframe/" + data.result.hashed_id)
                  $('#videoframe').attr('src', "http://fast.wistia.net/embed/iframe/" + data.result.hashed_id);
                  $('#videoframe').css({
                    display: 'inline'
                  });
        
                },
                progressall: function (e, data) {
                  var progress = parseInt(data.loaded / data.total * 100, 10);
                  $('#progress .bar').css(
                    'width',
                    progress + '%'
                  );
                }
              });
        };
      }
  });