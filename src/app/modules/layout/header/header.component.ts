import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuVariable: boolean = false;
  header_variable = true;
  currentRoute!: string;
  routeCheck: boolean = false;
  QuateCheck: boolean = true;
  constructor(
    private router: Router,
    private _router: Router,
    private _interactionService: InteractionService,
    private _route: ActivatedRoute
  ) {
    this.currentRoute = 'Demo';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute);
      }

      if (this.currentRoute === '/') {
        this.QuateCheck = true;
      }
    });
  }

  ngOnInit(): void {
    if (this.routeCheck === true) {
      this.header_variable = true;
    }
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
  }
  closeMenu() {
    this.menuVariable = !this.menuVariable;
  }
  closeMenu1(e: any) {
    this.menuVariable = !this.menuVariable;
  }

  @HostListener('document:scroll')
  scrollFunction() {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0 ||
      this.routeCheck === true
    ) {
      this.header_variable = true;
    } else {
      this.header_variable = true;
    }
  }

  goto(e: any) {}

  scroll(target: string) {
    const path = this._router.url;
    const pathArray = path.split('?');
    const t = this._route.snapshot.queryParams['t'];
    if (pathArray[0] === '/' && t === target) {
      this._interactionService.setScroll$(target);
    } else {
      this._router.navigate(['/'], {
        replaceUrl: true,
        queryParams: {
          t: target,
        },
      });
    }
  }
}
