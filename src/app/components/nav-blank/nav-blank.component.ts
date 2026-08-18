import { AuthLoginService } from './../../core/services/auth-login.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent {
 private readonly _AuthLoginService=inject(AuthLoginService)
 hamada(){
  this._AuthLoginService.logOut()

 }
}
