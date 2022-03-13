import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

/* Comment

*/

//#region 1. function component
// function App() {
//   return (<div>
//       <h1>Hello</h1>
//     </div>);
// }
//#endregion

//#region 2. className component
class Home extends React.Component {
  // state를 사용할때 Default값을 필수적으로 지정할 필요는 없다.
  state = {
    isLoading: true,
    movies:[]
  };

  getMovies = async () => {
    // movies.data.data.movies
    const {
      data: {
        data:{
          movies
        }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading:false });
  };

  async componentDidMount(){
    this.getMovies();
  };

  render() { 
    const {isLoading, movies} = this.state;
    return (
      <section className='constainer'>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            ))}
          </div>
        )
        }
      </section>
    );
  }
}
//#endregion

export default Home;
