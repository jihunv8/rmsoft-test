type Setter = () => void;

class Store {
  static instance: Store | null = null;

  private setterList: Setter[] = [];

  private constructor() {}

  static getStore() {
    if (this.instance === null) {
      this.instance = new Store();
    }

    return this.instance;
  }

  dispatch() {
    this.setterList.forEach((setter) => setter());
  }

  listen(setter: Setter) {
    this.setterList.push(setter);
  }
}

export default Store;
