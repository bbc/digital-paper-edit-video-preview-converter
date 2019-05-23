const path = require('path');
const convertVideo = require('../convert-to-video-preview');
module.exports = (app) => {
  app.post('/convert-to-mp4', (req, res) => {
    const url = req.query.mediaUrl;
    // TODO: scramble file names to be unique?
    // TODO: use system TMP dir?
    const outPutFileOutput = path.join(__dirname, 'test.mp4')
    console.log('url:: ',url);

    convertVideo({
      src: url,
      outputName: outPutFileOutput,
      callback: function(outputName){
        console.info("--> converted mp4 video file: "+JSON.stringify(outputName, null, 4));
        //output object 
        var output_video_details  = {
          videoOgg        : outputName,
          processedVideo  : true        
        };
        //callback for video result 
        // if(config.cbVideo){
        //   config.cbVideo(output_video_details);
        // }
        // res.sendFile(outputName);
        res.sendFile(outPutFileOutput);
      }
    });
  });
}
