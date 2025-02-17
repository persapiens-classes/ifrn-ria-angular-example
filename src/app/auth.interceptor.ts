import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export function authIntercept(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    // Verify if request is from AuthService
    if (req.url.includes('/login')) {
      return next(req)  // If login, do not add token
    }

    // If not login request, add token
    const authService = inject(AuthService); // Injetando o serviço
    const token = authService.authenticatedToken()
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })

      return next(cloned) // Continue cloned request
    }

    return next(req)  // Continue with request, without authorization
}
