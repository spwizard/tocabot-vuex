import { GetterTree } from 'vuex';
import { LayoutState } from '@/store/layout/layout.types';
import { RootState } from '../types';

export const getters: GetterTree<LayoutState, RootState> = {
    showSideNav(state) {
        return state.showSideNav;
    },
};
