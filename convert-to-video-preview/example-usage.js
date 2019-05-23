const convertVideo = require('./index.js');
const videoFile = 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm';
const videoHtml5OutputPathName = './test3.mp4';


convertVideo({
    src: videoFile,
    outputName: videoHtml5OutputPathName,
    callback: function(outputName){
      console.info("--> converted mp4 video file: "+JSON.stringify(outputName, null, 4));
      //output object 
      var output_video_details  = {
        videoOgg        : outputName,
        processedVideo  : true        
      };
      //callback for video result 
      if(config.cbVideo){
        config.cbVideo(output_video_details);
      }
    }
  });