import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function authIntercept(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    // Verify if request is from AuthService
    if (req.url.includes('/login')) {
      return next(req)  // If login, do not add token
    }

    // If not login request, add token
    const token = localStorage.getItem('token')
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
