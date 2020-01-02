import { Injectable } from '@angular/core';
import * as alertif from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AltertifyService {
  constructor() {}

  confirm(message: string, okCallback: () => any) {
    alertif.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      }
    });
  }

  success(message: string) {
    alertif.success(message);
  }

  error(message: string) {
    alertif.error(message);
  }

  warning(message: string) {
    alertif.warning(message);
  }

  message(message: string) {
    alertif.message(message);
  }
}
