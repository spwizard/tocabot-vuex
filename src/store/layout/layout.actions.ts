import { RootState } from './../types';
import { LayoutState, LayoutActionTypes } from '@/store/layout/layout.types';
import { ActionTree } from 'vuex';

export const actions: ActionTree<LayoutState, RootState> = {

    openSideNav({commit}) {
        commit(LayoutActionTypes.OpenSidenav);
    },
    closeSideNav({commit}) {
        commit(LayoutActionTypes.CloseSidenav);
    },
};



