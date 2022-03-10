import './index.css'
import MovieStars from 'components/MovieStars'

function MovieScore(){

    let score:number = 3.5
    let count:number = 13

    return(
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}
export default MovieScore