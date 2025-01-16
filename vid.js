function loadYouTubeVideo(videoId) {
  const iframe = document.getElementById('youtube-player');
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
}