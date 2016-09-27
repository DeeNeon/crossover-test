$(function(){
  var time = 15;
  var scale = 1;
  var video_obj = null;
  var videos = $('video');

  videos.each(function(){
    $(this).on('loadedmetadata', function() {
      this.currentTime = time;
      video_obj = this;

    }, false);

    $(this).on('loadeddata', function() {
      var video = $(this);

      var canvas = document.createElement("canvas");
      canvas.width = video.videoWidth * scale;
      canvas.height = video.videoHeight * scale;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      var img = document.createElement("img");
      img.src = canvas.toDataURL();
      //$('#thumbnail').append(img);

      video_obj.currentTime = 0;

    }, false);
  });

});
