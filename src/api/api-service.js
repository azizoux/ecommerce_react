export class API {
  static loginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static registerUser(body) {
    return fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static getMugs() {
    return fetch("http://127.0.0.1:8000/api/mugs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  static getFavoriteMovies(token) {
    return fetch("http://127.0.0.1:8000/api/movies/favorite/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());
  }

  static updateMovie(movie_id, body, token) {
    return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static createMovie(body, token) {
    return fetch(`http://127.0.0.1:8000/api/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static deleteMovie(id, token) {
    return fetch(`http://127.0.0.1:8000/api/movies/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }
}
