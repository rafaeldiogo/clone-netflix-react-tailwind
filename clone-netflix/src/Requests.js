const key = 'c8bea1796f4b1fb9e097f083be424fff';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=1`,
  };

  export default requests