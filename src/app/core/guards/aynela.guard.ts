import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const aynelaGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)
  const _PLATFORM_ID=inject(PLATFORM_ID)
     
    
    
    
  if (typeof localStorage !=='undefined') {
    if (localStorage.getItem('usertoken')!==null) {
      _Router.navigate(['/home'])
        return false;
        
    }else{
        
        return true;
    }
    
  }else{return false}
};
