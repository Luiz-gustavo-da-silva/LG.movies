import { Link } from "react-router-dom";
import { StarOutlined } from '@ant-design/icons';

const imageURL= import.meta.env.VITE_IMG;


function MovieCard({movie, showLink=true}) {
  return(
     <>
     <div className="movie-card">
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h1>{movie.title}</h1>
        <p><StarOutlined /></p>
        { showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link> }
     </div>
    </>
  );
}

export default MovieCard;
