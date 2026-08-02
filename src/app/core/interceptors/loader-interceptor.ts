import { HttpInterceptorFn } from '@angular/common/http';
import {LoadingService} from '@service/loader/loading-service';
import {inject} from '@angular/core';
import {finalize} from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const service: LoadingService = inject(LoadingService);
  service.startLoading();

  return next(req).pipe(
    finalize(() => {
      service.stopLoading();
    })
  );
};
