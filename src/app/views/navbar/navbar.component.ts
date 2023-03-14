import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: MenuItem[];


  constructor(private authservice: AuthService) {

      this.items = [
          {
              label:'My Feed',
              icon:'pi pi-fw pi-inbox',
              routerLink: ['/dashboard'],
              routerLinkActiveOptions: {
                exact: true
              },
              style: {'margin-left':'auto'}
          },
          {
              label:'My Posts',
              icon:'pi pi-fw pi-book',
              routerLink: ['/myposts'],
              routerLinkActiveOptions: {
                exact: true
              },
              style: {'margin-left':'auto'}
          },
        //   {
        //       label:'Users',
        //       icon:'pi pi-fw pi-user',
        //       items:[
        //           {
        //               label:'New',
        //               icon:'pi pi-fw pi-user-plus',

        //           },
        //           {
        //               label:'Delete',
        //               icon:'pi pi-fw pi-user-minus',

        //           },
        //           {
        //               label:'Search',
        //               icon:'pi pi-fw pi-users',
        //               items:[
        //               {
        //                   label:'Filter',
        //                   icon:'pi pi-fw pi-filter',
        //                   items:[
        //                       {
        //                           label:'Print',
        //                           icon:'pi pi-fw pi-print'
        //                       }
        //                   ]
        //               },
        //               {
        //                   icon:'pi pi-fw pi-bars',
        //                   label:'List'
        //               }
        //               ]
        //           }
        //       ]
        //   },
        //   {
        //       label:'Events',
        //       icon:'pi pi-fw pi-calendar',
        //       items:[
        //           {
        //               label:'Edit',
        //               icon:'pi pi-fw pi-pencil',
        //               items:[
        //               {
        //                   label:'Save',
        //                   icon:'pi pi-fw pi-calendar-plus'
        //               },
        //               {
        //                   label:'Delete',
        //                   icon:'pi pi-fw pi-calendar-minus'
        //               },

        //               ]
        //           },
        //           {
        //               label:'Archieve',
        //               icon:'pi pi-fw pi-calendar-times',
        //               items:[
        //               {
        //                   label:'Remove',
        //                   icon:'pi pi-fw pi-calendar-minus'
        //               }
        //               ]
        //           }
        //       ]
        //   },
        //   {
        //       label:'Quit',
        //       icon:'pi pi-fw pi-power-off'
        //   }
      ];
  }

  public logout(){
    localStorage.removeItem("Token");
    this.authservice.logout()
  }

}
