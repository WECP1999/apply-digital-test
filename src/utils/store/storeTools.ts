import { create, StateCreator } from 'zustand';
import { devtools, persist, PersistOptions, PersistStorage } from 'zustand/middleware';

interface ICreateStoreOptions<T, U> {
  persistOptions?: PersistOptions<T, U>;
  devtoolsEnabled?: boolean;
}

export const createStore = <T extends object>(
  createState: StateCreator<T>,
  options?: ICreateStoreOptions<T, any>,
) => {
  let store = create(createState);

  if (options?.persistOptions) {
    store = create(persist(createState, options.persistOptions));
  }

  if (options?.devtoolsEnabled) {
    store = create(devtools(createState));
  }

  if (options?.devtoolsEnabled && options?.persistOptions) {
    store = create(devtools(persist(createState, options.persistOptions)));
  }

  return store;
};

export const localPersistStorage: PersistStorage<any> = {
  getItem: (name) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return JSON.parse(str);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};
