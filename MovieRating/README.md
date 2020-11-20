# A blockchain backed ratings system for Movies

## Use cases
1. One user acts as an initiator to create a ratings smart contact for a set of movies.
2. Once a ratings contract is created, its initiator is fixed.
3. While creating a new ratings contact, the initiator must specify the movies category (e.g. Action movies) and with some initial movies' list (Optional).
4. Each movie may have such attributes: Title (required and unique), Poster, Major-staff, Brief-introduction, ...
5. Only the initiator of the contact can add a new movie.
6. Any user can view such the category movies' list with each movie's rating score:
   Poster, Title, Major-staff, Brief-introduction, ..., average-rating-score, total-rating-users, (the rating score of this user) or (score input for rating).
7. Any user can rate for any movie in the list, but can score for one movie only once.
8. The score for each movie uses a hundred mark system.

## RESTful APIs
The [RESTful APIs](RESTAPIs.md) between frontend and backend.

## Authors

* **Zhaoping Yu** - *Initial work* - yuzhaoping1970@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
