const movieSingle = (props) => {
  const movie = props.movie;

  const handleBackClick = () => {
    props.onSetMovie(null);
  };

  return ( 
    <div style={{ height: "100vh", width: "100vw" }}>
      <div id="button-back">
        <button onClick={() => handleBackClick()} class="btn btn-lg btn-dark"><span class="fa fa-back"></span> RETOUR</button>
      </div>
      <h1 className="text-center">{ movie.title }</h1>
      <h1 className="text-center">{ movie.description }</h1>
      <div class="video-wrapper">
        <iframe src={ movie.stream_url } frameborder="0" width="90%" height="90%" align="center" ></iframe>
      </div>
    </div>
  );
}
 
export default movieSingle;