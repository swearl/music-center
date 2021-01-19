import { Player } from '@/interfaces';
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  player: Player;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    player: {
      volume: 50,
      playlist: [],
    },
  },
  getters: {
    player(state) {
      return state.player;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

export function useStore() {
  // 通过key给store提供类型
  return baseUseStore(key);
}
