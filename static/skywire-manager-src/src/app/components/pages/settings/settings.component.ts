import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TabButtonData } from '../../layout/tab-bar/tab-bar.component';
import { AuthService } from '../../../services/auth.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { SidenavService } from 'src/app/services/sidenav.service';

/**
 * Page with the general settings of the app.
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  tabsData: TabButtonData[] = [];

  private menuSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbarService: SnackbarService,
    private sidenavService: SidenavService,
  ) {
    // Data for populating the tab bar.
    this.tabsData = [
      {
        icon: 'view_headline',
        label: 'nodes.title',
        linkParts: ['/nodes'],
      },
      {
        icon: 'settings',
        label: 'settings.title',
        linkParts: ['/settings'],
      }
    ];
  }

  ngOnInit() {
    setTimeout(() => {
      // Populate the left options bar.
      this.menuSubscription = this.sidenavService.setContents([
        {
          name: 'common.logout',
          actionName: 'logout',
          icon: 'power_settings_new'
        }], null).subscribe(actionName => {
          // React to the events of the left options bar.
          if (actionName === 'logout') {
            this.logout();
          }
        }
      );
    });
  }

  ngOnDestroy() {
    if (this.menuSubscription) {
      this.menuSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout().subscribe(
      () => this.router.navigate(['login']),
      () => this.snackbarService.showError('common.logout-error')
    );
  }
}
