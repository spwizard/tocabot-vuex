export enum LayoutActionTypes {
  OpenSidenav = 'openSidenav',
  CloseSidenav = 'closeSidenav',
}

export interface LayoutState {
  showSideNav: boolean;
}
