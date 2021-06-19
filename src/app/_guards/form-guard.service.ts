import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class FormGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(
    component: ContactComponent,
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log(component.registerForm.valid);
    if(!component.registerForm.valid)
    {
      return confirm("Form is not completed. Do you want to leave without filling up the form?");
    }
    else{
      return true;
    }
  }
}