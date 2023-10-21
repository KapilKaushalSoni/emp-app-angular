import { CanActivateFn } from '@angular/router';

export const appAuthGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem("token") != null)
    return true;
  else
    return false;
};
