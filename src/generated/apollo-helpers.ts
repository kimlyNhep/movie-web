import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CharacterKeySpecifier = ('id' | 'username' | 'photo' | 'movieCharacters' | CharacterKeySpecifier)[];
export type CharacterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCharacters?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterResponseKeySpecifier = ('character' | 'errors' | CharacterResponseKeySpecifier)[];
export type CharacterResponseFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharactersResponseKeySpecifier = ('characters' | 'errors' | CharactersResponseKeySpecifier)[];
export type CharactersResponseFieldPolicy = {
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('id' | 'user' | 'movie' | 'text' | 'createdAt' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentResponseKeySpecifier = ('comment' | 'errors' | CommentResponseKeySpecifier)[];
export type CommentResponseFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentWithPermissionKeySpecifier = ('comment' | 'isEdit' | 'isDelete' | CommentWithPermissionKeySpecifier)[];
export type CommentWithPermissionFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	isEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isDelete?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentsResponseKeySpecifier = ('comments' | 'errors' | CommentsResponseKeySpecifier)[];
export type CommentsResponseFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorResponseKeySpecifier = ('field' | 'message' | ErrorResponseKeySpecifier)[];
export type ErrorResponseFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreKeySpecifier = ('id' | 'name' | 'movies' | GenreKeySpecifier)[];
export type GenreFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreResponseKeySpecifier = ('genre' | 'errors' | GenreResponseKeySpecifier)[];
export type GenreResponseFieldPolicy = {
	genre?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenresResponseKeySpecifier = ('genres' | 'errors' | GenresResponseKeySpecifier)[];
export type GenresResponseFieldPolicy = {
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginResponseKeySpecifier = ('accessToken' | 'user' | 'errors' | LoginResponseKeySpecifier)[];
export type LoginResponseFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieKeySpecifier = ('id' | 'title' | 'description' | 'photo' | 'creator' | 'info' | 'genres' | 'ratingMovies' | 'comment' | 'movieCharacters' | 'point' | 'movieState' | 'rank' | MovieKeySpecifier)[];
export type MovieFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCharacters?: FieldPolicy<any> | FieldReadFunction<any>,
	point?: FieldPolicy<any> | FieldReadFunction<any>,
	movieState?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCharactersKeySpecifier = ('character' | 'movie' | 'role' | MovieCharactersKeySpecifier)[];
export type MovieCharactersFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieInfoKeySpecifier = ('id' | 'type' | 'producer' | 'episode' | 'status' | 'synopsis' | 'backgroundInfo' | 'duration' | 'released_date' | 'movie' | MovieInfoKeySpecifier)[];
export type MovieInfoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	producer?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	released_date?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieInfoResponseKeySpecifier = ('info' | 'errors' | MovieInfoResponseKeySpecifier)[];
export type MovieInfoResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRankingResponseKeySpecifier = ('movies' | 'errors' | MovieRankingResponseKeySpecifier)[];
export type MovieRankingResponseFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieResponseKeySpecifier = ('movie' | 'errors' | MovieResponseKeySpecifier)[];
export type MovieResponseFieldPolicy = {
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStateKeySpecifier = ('watching' | 'planToWatch' | 'completed' | 'drop' | 'user' | 'movie' | MovieStateKeySpecifier)[];
export type MovieStateFieldPolicy = {
	watching?: FieldPolicy<any> | FieldReadFunction<any>,
	planToWatch?: FieldPolicy<any> | FieldReadFunction<any>,
	completed?: FieldPolicy<any> | FieldReadFunction<any>,
	drop?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStateResponseKeySpecifier = ('movie' | 'user' | 'errors' | MovieStateResponseKeySpecifier)[];
export type MovieStateResponseFieldPolicy = {
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieUploadResponseKeySpecifier = ('imageUrl' | 'errors' | MovieUploadResponseKeySpecifier)[];
export type MovieUploadResponseFieldPolicy = {
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoviesResponseKeySpecifier = ('movies' | 'errors' | MoviesResponseKeySpecifier)[];
export type MoviesResponseFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('updateMovieState' | 'uploadMoviePhoto' | 'createGenre' | 'register' | 'login' | 'logout' | 'updateMovie' | 'createMovie' | 'ratingMovie' | 'createCharacter' | 'updateMovieInfo' | 'createMovieInformation' | 'updateComment' | 'deleteComment' | 'commentMovies' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	updateMovieState?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadMoviePhoto?: FieldPolicy<any> | FieldReadFunction<any>,
	createGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createCharacter?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMovieInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	createMovieInformation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>,
	commentMovies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NumberUserTypeKeySpecifier = ('total' | NumberUserTypeKeySpecifier)[];
export type NumberUserTypeFieldPolicy = {
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getCurrentMovieState' | 'getMovieState' | 'getGenres' | 'me' | 'getTotalUsers' | 'getMovie' | 'getMovies' | 'getMoviesByYear' | 'getRankingMovies' | 'getMoviesByUser' | 'getAllCharacter' | 'getComments' | 'getComment' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getCurrentMovieState?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieState?: FieldPolicy<any> | FieldReadFunction<any>,
	getGenres?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	getMoviesByYear?: FieldPolicy<any> | FieldReadFunction<any>,
	getRankingMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	getMoviesByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCharacter?: FieldPolicy<any> | FieldReadFunction<any>,
	getComments?: FieldPolicy<any> | FieldReadFunction<any>,
	getComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RankingTypeKeySpecifier = ('rankingMovie' | 'rank' | RankingTypeKeySpecifier)[];
export type RankingTypeFieldPolicy = {
	rankingMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingMoviesKeySpecifier = ('user' | 'movie' | 'ratedPoint' | RatingMoviesKeySpecifier)[];
export type RatingMoviesFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	ratedPoint?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterResponseKeySpecifier = ('user' | 'errors' | 'accessToken' | RegisterResponseKeySpecifier)[];
export type RegisterResponseFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'email' | 'username' | 'role' | 'movies' | 'photo' | 'ratingMovies' | 'comment' | 'movieState' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	movieState?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieStateResponseKeySpecifier = ('watching' | 'completed' | 'planToWatch' | 'drop' | 'errors' | UserMovieStateResponseKeySpecifier)[];
export type UserMovieStateResponseFieldPolicy = {
	watching?: FieldPolicy<any> | FieldReadFunction<any>,
	completed?: FieldPolicy<any> | FieldReadFunction<any>,
	planToWatch?: FieldPolicy<any> | FieldReadFunction<any>,
	drop?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Character?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterKeySpecifier | (() => undefined | CharacterKeySpecifier),
		fields?: CharacterFieldPolicy,
	},
	CharacterResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterResponseKeySpecifier | (() => undefined | CharacterResponseKeySpecifier),
		fields?: CharacterResponseFieldPolicy,
	},
	CharactersResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharactersResponseKeySpecifier | (() => undefined | CharactersResponseKeySpecifier),
		fields?: CharactersResponseFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentResponseKeySpecifier | (() => undefined | CommentResponseKeySpecifier),
		fields?: CommentResponseFieldPolicy,
	},
	CommentWithPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentWithPermissionKeySpecifier | (() => undefined | CommentWithPermissionKeySpecifier),
		fields?: CommentWithPermissionFieldPolicy,
	},
	CommentsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentsResponseKeySpecifier | (() => undefined | CommentsResponseKeySpecifier),
		fields?: CommentsResponseFieldPolicy,
	},
	ErrorResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorResponseKeySpecifier | (() => undefined | ErrorResponseKeySpecifier),
		fields?: ErrorResponseFieldPolicy,
	},
	Genre?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreKeySpecifier | (() => undefined | GenreKeySpecifier),
		fields?: GenreFieldPolicy,
	},
	GenreResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreResponseKeySpecifier | (() => undefined | GenreResponseKeySpecifier),
		fields?: GenreResponseFieldPolicy,
	},
	GenresResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenresResponseKeySpecifier | (() => undefined | GenresResponseKeySpecifier),
		fields?: GenresResponseFieldPolicy,
	},
	LoginResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginResponseKeySpecifier | (() => undefined | LoginResponseKeySpecifier),
		fields?: LoginResponseFieldPolicy,
	},
	Movie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieKeySpecifier | (() => undefined | MovieKeySpecifier),
		fields?: MovieFieldPolicy,
	},
	MovieCharacters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCharactersKeySpecifier | (() => undefined | MovieCharactersKeySpecifier),
		fields?: MovieCharactersFieldPolicy,
	},
	MovieInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieInfoKeySpecifier | (() => undefined | MovieInfoKeySpecifier),
		fields?: MovieInfoFieldPolicy,
	},
	MovieInfoResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieInfoResponseKeySpecifier | (() => undefined | MovieInfoResponseKeySpecifier),
		fields?: MovieInfoResponseFieldPolicy,
	},
	MovieRankingResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRankingResponseKeySpecifier | (() => undefined | MovieRankingResponseKeySpecifier),
		fields?: MovieRankingResponseFieldPolicy,
	},
	MovieResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieResponseKeySpecifier | (() => undefined | MovieResponseKeySpecifier),
		fields?: MovieResponseFieldPolicy,
	},
	MovieState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStateKeySpecifier | (() => undefined | MovieStateKeySpecifier),
		fields?: MovieStateFieldPolicy,
	},
	MovieStateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStateResponseKeySpecifier | (() => undefined | MovieStateResponseKeySpecifier),
		fields?: MovieStateResponseFieldPolicy,
	},
	MovieUploadResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieUploadResponseKeySpecifier | (() => undefined | MovieUploadResponseKeySpecifier),
		fields?: MovieUploadResponseFieldPolicy,
	},
	MoviesResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoviesResponseKeySpecifier | (() => undefined | MoviesResponseKeySpecifier),
		fields?: MoviesResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NumberUserType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NumberUserTypeKeySpecifier | (() => undefined | NumberUserTypeKeySpecifier),
		fields?: NumberUserTypeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RankingType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RankingTypeKeySpecifier | (() => undefined | RankingTypeKeySpecifier),
		fields?: RankingTypeFieldPolicy,
	},
	RatingMovies?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingMoviesKeySpecifier | (() => undefined | RatingMoviesKeySpecifier),
		fields?: RatingMoviesFieldPolicy,
	},
	RegisterResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterResponseKeySpecifier | (() => undefined | RegisterResponseKeySpecifier),
		fields?: RegisterResponseFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserMovieStateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieStateResponseKeySpecifier | (() => undefined | UserMovieStateResponseKeySpecifier),
		fields?: UserMovieStateResponseFieldPolicy,
	}
};