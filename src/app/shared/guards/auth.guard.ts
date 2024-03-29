import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private auth: AngularFireAuth, private router: Router){}
  canActivate(): any {
    return this.auth.authState.pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);  // Redirect to login if not logged in
          return false;
        }
      })
    );
  }
}
