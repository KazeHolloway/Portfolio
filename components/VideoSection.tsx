
function VideoSection() {
  return (
    <section className="video-section reveal">
      {/* <h2>Ma petite vidéo<br /><br /></h2> */}

      <div className="video-container">
        <video src="/videos/dbz.mp4"  controls autoPlay muted loop />
      </div>
    </section>
  );
}

export default VideoSection;
