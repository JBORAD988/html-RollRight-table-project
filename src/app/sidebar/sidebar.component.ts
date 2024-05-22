import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems!: any[];



  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.map(menuItem => {
      menuItem.showSubmenu = false;
      return menuItem;
    });
  }

  toggleSubmenu(menuItem: RouteInfo): void {
    debugger
    menuItem.showSubmenu = !menuItem.showSubmenu;


    this.menuItems.forEach(item => {
      if (item !== menuItem) {
        item.showSubmenu = false;
      }
    });
  }
}

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  badge: string;
  badgeClass: string;
  isExternalLink: boolean;
  submenu: RouteInfo[];
  showSubmenu?: boolean; // Define showSubmenu property as optional
}
export const ROUTES: RouteInfo[] = [

  {
    path: '', title: 'Manage User', icon: 'bi bi-house-door', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/manage-user/zone-details', title: 'Zone Details', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      {
        path: '/manage-user/roles', title: 'Roles', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          {
            path: '/manage-user/roles/user-management', title: 'User Management', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
              { path: '/manage-user/roles/user-management/user-list', title: 'User List', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
              { path: '/manage-user/roles/user-management/user-activity', title: 'User Activity', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
            ]
          }
        ]
      },
    ]
  },
  {
    path: '', title: 'Station Details', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/station-details/station-list', title: 'Station List', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/station-details/manage-station', title: 'Manage Station', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/station-details/copy-multiple-channel', title: 'Copy Multiple Channels', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/station-details/query-setting', title: 'Query Setting', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/station-details/custom-equation', title: 'Custom Equation', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '/settings', title: 'Settings', icon: 'bi bi-award', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/settings/ports-setting', title: 'Ports Settings', icon: 'bi bi-award', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/settings/alarm-tag-setting', title: 'Alarm Tag Setting', icon: 'bi bi-award', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/settings/analog-channel-list', title: 'Analog Channel List', icon: 'bi bi-award', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/settings/digital-channel-list', title: 'Digital Channel List', icon: 'bi bi-award', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/settings/logging-interval', title: 'Logging Interval', icon: 'bi bi-award', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '', title: 'Instant OFF', icon: 'bi bi-bag-check', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/instant-off/set-instant-off', title: 'Set Instant OFF', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/instant-off/instant-off-tag-setting', title: 'Instant OFF Tag Setting', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/instant-off/register-setting-for-instant-off', title: 'Register Setting For Instant OFF', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Current Interruption Timer', icon: 'bi bi-bookmark-star', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/current-interruption-timer/set-interruption-timer', title: 'Set Interruption Timer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/current-interruption-timer/interruption-group-list', title: 'Interruption Group List', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/current-interruption-timer/tag-settings-for-current-interruption', title: 'Tag Settings for Current Interruption', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/current-interruption-timer/register-setting-for-current-interruption', title: 'Register Setting for Current Interruption', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Deplorisation', icon: 'bx bx-layer', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/deplorisation/depol', title: 'Set Depol', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/deplorisation/create', title: 'Create Depol Group', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/deplorisation/carouTag', title: 'CarouTag Settings for Depolsel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/deplorisation/register', title: 'Register Settings for Depol', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Output Control', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/output-control/on-off', title: 'ON/OFF Control', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/output-control/output', title: 'Output Value Control', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/output-control/register-on-off', title: 'Register settings for ON/OFF Control', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/output-control/register-output', title: 'Register Settings for Output Value', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '', title: 'Templates', icon: 'bi bi-cloud-arrow-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/templates/mimic-template', title: 'Mimic Templates', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/templates/mimic-page', title: 'Mimic Page Settings', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/templates/tru-location', title: 'TRU Location Settings', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      {
        path: '/templates/report', title: 'Report Templates', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          {
            path: '/templates/report/email-template', title: 'Email Template', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
              { path: '/templates/report/email-template/setting', title: 'Email Settings', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
              { path: '/templates/report/email-template/credentials', title: 'Email Credentials', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
              { path: '/templates/report/email-template/list', title: 'List of Email Templates', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
            ]
          }
        ]
      },
      { path: '/templates/gis-templates', title: 'GIS Templates', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  { path: '', title: 'Communication Panel', icon: 'bi bi-cloud-arrow-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '', title: 'Application Settings', icon: 'bi bi-cloud-arrow-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '', title: 'Login Page Settings', icon: 'bi bi-cloud-arrow-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '', title: 'IP Address Settings', icon: 'bi bi-cloud-arrow-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '', title: 'Database Backup and Restore', icon: 'bi bi-cloud-arrow-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
]
