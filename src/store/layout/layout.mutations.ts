import { MutationTree } from 'vuex';
import { LayoutState } from '@/store/layout/layout.types';

export const mutations: MutationTree<LayoutState> = {
  closeSidenav(state) {
    state.showSideNav = false;
  },
  openSidenav(state) {
    state.showSideNav = true;
  },
};
