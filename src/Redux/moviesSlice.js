import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const mockMovies = [
  {
  id: 1,
  title: "KGF: Chapter 2",
  poster_path: "https://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
  vote_average: 8.5,
  release_date: "2022-04-14",
  overview: "Rocky returns to take control of the gold mines and assert his power.",
  original_language: "en",
  runtime: 150,
  tagline: "Rise to power"
},
  {
    id: 2,
    title: "Avengers: Endgame",
    poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    vote_average: 8.4,
    release_date: "2019-04-24",
    overview: "After the devastating events, the Avengers assemble to reverse Thanos' actions.",
    original_language: "en",
    runtime: 181,
    tagline: "Part of the journey"
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    poster_path: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    vote_average: 8.3,
    release_date: "2021-12-15",
    overview: "Peter Parker seeks help after his identity is revealed, opening multiverse chaos.",
    original_language: "en",
    runtime: 148,
    tagline: "The Multiverse unleashed"
  },
  {
    id: 4,
    title: "Joker",
    poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    vote_average: 8.5,
    release_date: "2019-10-04",
    overview: "A failed comedian descends into madness in Gotham City.",
    original_language: "en",
    runtime: 122,
    tagline: "Put on a happy face"
  },
  {
    id: 5,
    title: "The Dark Knight",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 9.0,
    release_date: "2008-07-18",
    overview: "Batman faces the Joker, a criminal mastermind wreaking havoc in Gotham.",
    original_language: "en",
    runtime: 152,
    tagline: "Why So Serious?"
  },
  {
    id: 6,
    title: "Inception",
    poster_path: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    vote_average: 8.8,
    release_date: "2010-07-16",
    overview: "A thief enters dreams to steal secrets but faces dangerous subconscious traps.",
    original_language: "en",
    runtime: 148,
    tagline: "Your mind is the scene of the crime"
  },
  {
    id: 7,
    title: "Interstellar",
    poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    vote_average: 8.6,
    release_date: "2014-11-07",
    overview: "A team travels through a wormhole to save humanity from extinction.",
    original_language: "en",
    runtime: 169,
    tagline: "Mankind’s next step"
  },
  {
    id: 8,
    title: "Titanic",
    poster_path: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    vote_average: 7.9,
    release_date: "1997-12-19",
    overview: "A love story unfolds on the ill-fated Titanic voyage.",
    original_language: "en",
    runtime: 195,
    tagline: "Nothing on Earth could come between them"
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    vote_average: 9.3,
    release_date: "1994-09-23",
    overview: "Two imprisoned men bond over years, finding hope and redemption.",
    original_language: "en",
    runtime: 142,
    tagline: "Fear can hold you prisoner. Hope can set you free."
  },
  {
    id: 10,
    title: "The Godfather",
    poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    vote_average: 9.2,
    release_date: "1972-03-24",
    overview: "The aging patriarch of a crime dynasty transfers control to his son.",
    original_language: "en",
    runtime: 175,
    tagline: "An offer you can't refuse"
  },
  {
    id: 11,
    title: "Black Panther",
    poster_path: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    vote_average: 7.3,
    release_date: "2018-02-13",
    overview: "T’Challa returns home to Wakanda to take the throne and face challenges.",
    original_language: "en",
    runtime: 134,
    tagline: "Long live the king"
  },
 {
  id: 12,
  title: "Avatar",
  poster_path: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
  vote_average: 7.8,
  release_date: "2009-12-18",
  overview: "A paraplegic Marine is sent to Pandora on a mission, learning the ways of the Na’vi.",
  original_language: "en",
  runtime: 162,
  tagline: "Enter the world"
},
{
  id: 13,
  title: "Doctor Strange",
  poster_path: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  vote_average: 7.5,
  release_date: "2016-11-04",
  overview: "A surgeon learns sorcery after a car accident.",
  original_language: "en",
  runtime: 115,
  tagline: "Enter a new dimension"
},
  {
  id: 14,
  title: "Guardians of the Galaxy",
  poster_path: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
  vote_average: 8.0,
  release_date: "2014-08-01",
  overview: "A group of intergalactic criminals must save the universe.",
  original_language: "en",
  runtime: 121,
  tagline: "All heroes start somewhere"
},
 {
    id: 15,
    title: "Deadpool",
    poster_path: "https://image.tmdb.org/t/p/w500/en971MEXui9diirXlogOrPKmsEn.jpg",
    vote_average: 8.0,
    release_date: "2016-02-12",
    overview: "Wade Wilson becomes Deadpool.",
    original_language: "en",
    runtime: 108,
    tagline: "With great power comes great irresponsibility"
  },
  {
    id: 16,
    title: "Iron Man",
    poster_path: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    vote_average: 7.9,
    release_date: "2008-05-02",
    overview: "Tony Stark becomes Iron Man after building a high-tech suit.",
    original_language: "en",
    runtime: 126,
    tagline: "Genius. Billionaire. Playboy. Philanthropist."
  },
{
  id: 17,
  title: "Thor: Ragnarok",
  poster_path: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  vote_average: 7.9,
  release_date: "2017-10-25",
  overview: "Thor must escape captivity and prevent Ragnarok.",
  original_language: "en",
  runtime: 130,
  tagline: "No Hammer. No Problem."
},
  {
    id: 18,
    title: "The Lion King",
    poster_path: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    vote_average: 8.5,
    release_date: "1994-06-24",
    overview: "A young lion prince flees his kingdom only to reclaim it.",
    original_language: "en",
    runtime: 88,
    tagline: "Life's greatest adventure"
  },
  {
    id: 19,
    title: "Frozen II",
    poster_path: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
    vote_average: 7.1,
    release_date: "2019-11-22",
    overview: "Elsa and Anna embark on a journey to discover the origin of Elsa's powers.",
    original_language: "en",
    runtime: 103,
    tagline: "The next chapter begins"
  },
    {
    id: 20,
    title: "Jumanji: Welcome to the Jungle",
    poster_path: "https://image.tmdb.org/t/p/w500/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
    vote_average: 6.9,
    release_date: "2017-12-20",
    overview: "Teens trapped in a video game.",
    original_language: "en",
    runtime: 119,
    tagline: "The game has evolved"
  },


];



export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    const { query,  page: _page } = thunkAPI.getState().movies;

    try {
      let results = mockMovies;

      if (query?.trim()) {
        const q = query.toLowerCase();
        results = mockMovies.filter(m => m.title.toLowerCase().includes(q));
      }

      return {
        results,
        total_pages: 1,
        total_results: results.length
      };
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    total_pages: 0,
    total_results: 0,
    status: 'idle',
    error: null,
    query: '',
    page: 1,
    selected: null,
  },
  reducers: {
    setQuery(state, action) { state.query = action.payload; state.page = 1; },
    setPage(state, action) { state.page = action.payload; },
    selectMovie(state, action) { state.selected = action.payload; },
    clearSelected(state) { state.selected = null; }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => { state.status = 'loading'; state.error = null; })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.results;
        state.total_pages = action.payload.total_pages;
        state.total_results = action.payload.total_results;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message || 'Failed';
      });
  }
});

export const { setQuery, setPage, selectMovie, clearSelected } = moviesSlice.actions;
export default moviesSlice.reducer;













