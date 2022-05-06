class Storage {
    #storage;
  
    constructor() {
      this.#storage = localStorage;
    }
  
    getUser = (email, password) => {
      const data = this.#storage.getItem(email);
      const user = data ? JSON.parse(data) : null;
  
      if (!user || user.password !== password) {
            throw new Error();
      }
  
      return user;
    };
  
    setUser = (userData) => {
      const data = this.#storage.getItem(userData.email);
      const user = data ? JSON.parse(data) : null;
  
      if (user) {
        throw new Error();
      }
  
      this.#storage.setItem(userData.email, JSON.stringify(userData));
    };
  
    updateUser = (userData) => {
      this.#storage.setItem(userData.email, JSON.stringify(userData));
    };
  }
  
  export default new Storage();