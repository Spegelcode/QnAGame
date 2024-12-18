function showPdf(QnA game\pdf\Eloquent_JavaScript_3rdEdition.pdf) {
  document.getElementById('pdf-frame').src = pdfPath;
  document.getElementById('pdf-container').style.display = 'block';
}
function loadYouTubeVideo(videoId, startTime = 0) {
  const youtubePlayer = document.getElementById('youtube-player');
  youtubePlayer.src = `https://www.youtube.com/embed/${EfAl9bwzVZk}?start=${startTime}`;
}
loadYouTubeVideo('EfAl9bwzVZk', 5801);
