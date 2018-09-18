
import { LayoutState } from '@/store/layout/layout.types';
import { Module } from 'vuex';
import { RootState } from '../types';
import { getters } from '@/store/layout/layout.getters';
import { mutations } from '@/store/layout/layout.mutations';
import { actions } from '@/store/layout/layout.actions';

export const state: LayoutState = {
    showSideNav: false,
};

const namespaced: boolean = true;

export const layout: Module<LayoutState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};

