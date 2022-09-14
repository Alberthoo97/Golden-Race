import { Injectable } from '@angular/core';
import {  CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {
  /**
   * Return true or false depending if we allow the user to load the secure page
   * @returns {boolean}
   */
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // We always return false due to we don't want to let user load secure route
    return false;
  }
  
}
