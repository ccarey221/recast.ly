var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {key: options.key, q: options.q, maxResults: options.maxReults, part: 'snippet'},
    success: function(data) {
      console.log(data);
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;