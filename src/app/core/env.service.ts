import { Injectable, Inject, PLATFORM_ID, ApplicationRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  isUniversal$: BehaviorSubject<boolean>;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private appRef: ApplicationRef
  ) {
    this.isUniversal$ = new BehaviorSubject(isPlatformServer(platformId));
    this.appRef.isStable
      .pipe(
        filter(stable => stable),
        first()
      ).subscribe(() => {
        console.log('App is stable');
        this.isUniversal$.next(isPlatformServer(platformId));
      });
  }
}
