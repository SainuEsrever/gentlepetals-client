import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private currentBannerId = new BehaviorSubject<number>(1);
  currentBannerId$ = this.currentBannerId.asObservable();

  changeBanner(id: number) {
    this.currentBannerId.next(id);
  }
}