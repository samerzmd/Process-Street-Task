angular.module('myApp').component('psUploader', {
    templateUrl: './components/ps-uploader/psUploader.html',
    controller: function() {
      var ctrl = this;
        this.$onInit = function() {
            $('#fileupload').fileupload({
                url: 'https://upload.wistia.com?api_password=*******',
                dataType: 'json',
                done: function (e, data) {
                  console.log("http://fast.wistia.net/embed/iframe/" + data.result.hashed_id)
                  $('#myModal').modal('show'); 
                  $('#modalVideoContainer').empty()
                  var videoId=data.result.hashed_id
                  $('#modalVideoContainer').html("<iframe src='//fast.wistia.net/embed/iframe/"+videoId+"' allowtransparency='true' frameborder='0' scrolling='no' class='wistia_embed' name='wistia_embed' allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width='570' height='349'></iframe>");
                },
                progressall: function (e, data) {
                  var progress = parseInt(data.loaded / data.total * 100, 10);
                  $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                  );
                }
              });
        
            };
            ctrl.chooseFile=function(){
              $('#fileupload').click();
            }
      }
  });