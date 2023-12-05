import { note } from './schema/note';
import { notebook } from './schema/notebook';
import { notebook_note } from './schema/notebook_note';

const DB_NAME = 'upnote_db';

export interface Memory {
  notebook: { [key: string]: notebook };
  note: { [key: string]: note };
  notebook_note: { [key: string]: notebook_note };
}

class DB {
  private static instance: DB | null = null;

  private memory: Memory = {
    notebook: {},
    note: {},
    notebook_note: {},
  };

  private constructor() {
    this.syncFromLocalStorage();
  }

  static getDB() {
    if (this.instance === null) this.instance = new DB();
    return this.instance;
  }

  private syncToLocalStorage() {
    localStorage.setItem(DB_NAME, JSON.stringify(this.memory));
  }

  private syncFromLocalStorage() {
    const item = localStorage.getItem(DB_NAME);

    if (item === null) {
      this.syncToLocalStorage();
      return;
    }

    this.memory = JSON.parse(item);
  }

  setMemory<T>(setter: (memory: Memory) => T): T {
    this.syncFromLocalStorage();
    const returnValue = setter(this.memory);
    this.syncToLocalStorage();
    return returnValue;
  }

  getData<T>(getter: (memory: Memory) => T): T {
    this.syncFromLocalStorage();
    return getter(this.memory);
  }

  //notebook
  // createNotebook(id: string) {
  //   const notebook: notebook = {
  //     id,
  //   };

  //   this.memory.notebook[id] = notebook;

  //   this.syncToLocalStorage();
  // }

  // deleteNotebook(id: string) {
  //   if (this.memory.notebook[id] === undefined) {
  //     //삭제 실패
  //   }
  // }
}

export default DB;
