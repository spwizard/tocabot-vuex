<template>
   <div id="app">
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="layout.showSideNav"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="openSideNav()"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                icon
                large
                target="_blank"
                slot="activator"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017 {{ showSideNav }}</span>
    </v-footer>
  </v-app>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Action, Getter, namespace } from 'vuex-class';
import { LayoutState } from './store/layout/layout.types';

const LayoutAction = namespace('layout', Action);
const LayoutGetter = namespace('layout', Getter);

@Component
export default class App extends Vue {
    @State('layout')
    layout!: LayoutState;

    @LayoutGetter showSideNav!: boolean;
    @LayoutAction openSideNav: any;
    @LayoutAction closeSideNav: any;

}
</script>