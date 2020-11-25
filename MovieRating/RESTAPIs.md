## The RESTful APIs between frontend and backend.
NOTE: each of the APIs will return the unique error response format if some errors ocurred:
```
{
  "apiVersion": "v1",
  "error": {
    "code": "<number of error cord>",
    "message": "<The brief description about the error>",
    "errors": [
      {
        "message": "<The array of each error details>",
        ...
      },
      ...
    ]
  }
}
```

### `GET /api/v1/movie_ratings`
  Get all of the created movie rating contacts.
* Response body:
```
{
  "apiVersion": "v1",
  "data": [
    {
      "contactId": "<Use the contact deployed address as it's id>",
      "category": "<The category of movies for rating>"
    },
    ...
  ]
}
```

### `POST /api/v1/movie_ratings`
  Create a movie rating contact.
* Request body:
```
{
  "category": "<The category of movies for rating>"
}
```
* Response body:
```
{
  "apiVersion": "v1",
  "data": {
    "contactId": "<Use the contact deployed address as it's id>",
    "category": "<The category of movies for rating>"
  }
}
```

### `GET /api/v1/movie_ratings/:contactId/movies`
  Get the specified rating contact movies.
* Response body:
```
{
  "apiVersion": "v1",
  "data": [
    {
      "movieId": "<The generated unique movie id>",
      "title": "<The movie's title, unique for each category>",
      "posterUrl": "<The poster image url of the movie, optional>",
      "majorStaffs": "<The major staffs of the movie, optional>",
      "briefIntro": "<The brief introduction of the movie, optional>",
      "totalScore": "<The total score rated by users>",
      "ratedUserCount": "<The number of rated users>",
      "scoreByUser": "<The score that the current user rated, undefined if the current user has not rated for the movie>"
    },
    ...
  ]
}
```

### `POST /api/v1/movie_ratings/:contactId/movies`
  Create a movie about the rating contact.
* Request body:
```
{
  "title": "<The movie's title, unique for each category>",
  "posterUrl": "<The poster image url of the movie, optional>",
  "majorStaffs": "<The major staffs of the movie, optional>",
  "briefIntro": "<The brief introduction of the movie, optional>"
}
```
* Response body:
```
{
  "apiVersion": "v1",
  "data": {
    "movieId": "<The generated unique movie id>",
    "title": "<The movie's title, unique for each category>",
    "posterUrl": "<The poster image url of the movie, optional>",
    "majorStaffs": "<The major staffs of the movie, optional>",
    "briefIntro": "<The brief introduction of the movie, optional>",
    "totalScore": "<The total score rated by users>",
    "ratedUserCount": "<The number of rated users>",
    "scoreByUser": "<The score that the current user rated, undefined if the current user has not rated for the movie>"
  }
}
```

### `PATCH /api/v1/movie_ratings/:contactId/movies/:movieId`
  Rate the movie about the rating contact.
* Request body:
```
{
  "scoreByUser": "<The score that the current user rated>"
}
```
* Response body:
```
{
  "apiVersion": "v1",
  "data": {
    "movieId": "<The generated unique movie id>",
    "title": "<The movie's title, unique for each category>",
    "posterUrl": "<The poster image url of the movie, optional>",
    "majorStaffs": "<The major staffs of the movie, optional>",
    "briefIntro": "<The brief introduction of the movie, optional>",
    "totalScore": "<The total score rated by users>",
    "ratedUserCount": "<The number of rated users>",
    "scoreByUser": "<The score that the current user rated, undefined if the current user has not rated for the movie>"
  }
}
```
