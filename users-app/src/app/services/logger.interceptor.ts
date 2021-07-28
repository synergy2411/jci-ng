import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoggerInterceptor implements HttpInterceptor{

  intercept(req : HttpRequest<any>, next: HttpHandler ) : Observable<HttpEvent<any>>{
    console.log("Logger interceptor working....")
    console.log("METHOD :", req.method)
    const clonedReq = req.clone({
      // params : new HttpParams().set("auth", "")
    })
    return next.handle(clonedReq)

  }
}
