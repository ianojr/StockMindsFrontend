import { Injectable } from '@angular/core'; 
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'; 
import { Auth } from '../services/auth';
 
@Injectable() 
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: Auth) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getToken();

    // Exclude public endpoints
    const isPublicUrl = ['/login', '/register'].some(path => req.url.includes(path));

    if (token && !isPublicUrl) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
