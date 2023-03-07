const numberOfFilms = +prompt("Cколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt("Один из последних посмотренных фильмов?", ""),
	b = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
console.log(personalMovieDB);