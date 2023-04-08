import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Notifications } from 'src/app/models/notifModel';
import { AuthService } from 'src/app/services/auth-service.service';
import { SessionService } from 'src/app/unauthenticated/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: MenuItem[];
  notifications_num ="";
  notifications: Notifications[] | undefined;

  constructor(private authservice: AuthService,private session:SessionService) {
      this.get_notifs();
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
      if(localStorage.getItem('role')=="Admin"){
        this.items.unshift(
          {
            label:'Mod',
            icon:'pi pi-fw pi-cog',
            routerLink: ['/mod'],
            routerLinkActiveOptions: {
              exact: true
            },
            style: {'margin-left':'auto'}
        }
        )
      }
  }

  public logout(){
    localStorage.removeItem("Token");
    this.authservice.logout()
  }

  private get_notifs(){
    this.session.get("Notifications/User/"+localStorage.getItem('nameidentifier')).subscribe({
      next:response=>{
        this.notifications = response
        this.notifications_num = this.notifications?.length != undefined ? this.notifications?.length.toString() : "";
        console.log(this.notifications_num)
      },
      error:err=>{
      }
    })
  }

  public mark_notif(id:string){
    this.session.get("Notifications/"+id).subscribe({
      next:response=>{
        document.getElementById('notif'+id)?.classList.replace('unread','read')
      },
      error:err=>{

      }
    })
  }

}
