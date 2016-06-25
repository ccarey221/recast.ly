var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {key: options.key, query: options.query, max: options.max, part: 'snippet'}
  }).done(
    function(data) {
      callback(data.items);
    }
  );
};

window.searchYouTube = searchYouTube;
