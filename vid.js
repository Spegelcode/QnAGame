

function loadYouTubeVideo(videoId, event) {
  if (event) {
      event.preventDefault();
  }
    const iframe = document.getElementById('youtube-player');
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        console.error('PDF frame not found');
    }
}

