export class API {
  static getMugs() {
    return fetch("http://127.0.0.1:8000/api/mugs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  static getCarts() {
    return fetch("http://127.0.0.1:8000/api/carts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  static getCartByMugId(id) {
    return fetch(`http://127.0.0.1:8000/api/mugs/${id}/getCartByMugId/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  static async updateCart(id, body) {
    return await fetch(`http://127.0.0.1:8000/api/carts/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static async createCart(body) {
    return await fetch(`http://127.0.0.1:8000/api/carts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static deleteCart(id) {
    return fetch(`http://127.0.0.1:8000/api/carts/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
