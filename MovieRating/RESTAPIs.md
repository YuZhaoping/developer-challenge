## The RESTful APIs between frontend and backend.
NOTE: each of the APIs will return the unique error response format if some errors ocurred:
```
{
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
  "movieRatings": [
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
  "movieRating": {
    "category": "<The category of movies for rating>"
  }
}
```
* Response body:
```
{
  "movieRating": {
    "contactId": "<Use the contact deployed address as it's id>",
    "category": "<The category of movies for rating>"
  }
}
```

### `PATCH /api/v1/movie_ratings/:contactId`
  Append movies for the exists rating contact.
* Request body:
```
{
  "movieRating": {
    "movies": [
      {
        "title": "<The movie's title, unique for each category>",
        "posterUrl": "<The poster image url of the movie, optional>",
        "majorStaffs": "<The major staffs of the movie, optional>",
        "briefIntro": "<The brief introduction of the movie, optional>"
      },
      ...
    ]
  }
}
```
* Response body:
```
{
  "movieRating": {
    "contactId": "<Use the contact deployed address as it's id>",
    "category": "<The category of movies for rating>",
    "movies": [
      {
        "movieId": "<The generated unique movie id>",
        "title": "<The movie's title, unique for each category>",
        "posterUrl": "<The poster image url of the movie, optional>",
        "majorStaffs": "<The major staffs of the movie, optional>",
        "briefIntro": "<The brief introduction of the movie, optional>",
        "totalScore": "<The total score rated by users>",
        "numOfRatedUsers": "<The number of rated users>",
        "scoreByUser": "<The score that the current user rated, undefined if the current user has not rated for the movie>"
      },
      ...
    ]
  }
}
```

### `GET /api/v1/movie_ratings/:contactId`
  Get the specified category movie rating contact.
* Response body:
```
{
  "movieRating": {
    "contactId": "<Use the contact deployed address as it's id>",
    "category": "<The category of movies for rating>",
    "movies": [
      {
        "movieId": "<The generated unique movie id>",
        "title": "<The movie's title, unique for each category>",
        "posterUrl": "<The poster image url of the movie, optional>",
        "majorStaffs": "<The major staffs of the movie, optional>",
        "briefIntro": "<The brief introduction of the movie, optional>",
        "totalScore": "<The total score rated by users>",
        "numOfRatedUsers": "<The number of rated users>",
        "scoreByUser": "<The score that the current user rated, undefined if the current user has not rated for the movie>"
      },
      ...
    ]
  }
}
```

### `PATCH /api/v1/movie_ratings/:contactId/movies`
  Rate some movies for the rating contact.
* Request body:
```
{
  "movieRating": {
    "movies": [
      {
        "movieId": "<The generated unique movie id>",
        "scoreByUser": "<The score that the current user rated>"
      },
      ...
    ]
  }
}
```
* Response body:
```
{
  "movieRating": {
    "contactId": "<Use the contact deployed address as it's id>",
    "category": "<The category of movies for rating>",
    "movies": [
      {
        "movieId": "<The generated unique movie id>",
        "title": "<The movie's title, unique for each category>",
        "posterUrl": "<The poster image url of the movie, optional>",
        "majorStaffs": "<The major staffs of the movie, optional>",
        "briefIntro": "<The brief introduction of the movie, optional>",
        "totalScore": "<The total score rated by users>",
        "numOfRatedUsers": "<The number of rated users>",
        "scoreByUser": "<The score that the current user rated, undefined if the current user has not rated for the movie>"
      },
      ...
    ]
  }
}
```
