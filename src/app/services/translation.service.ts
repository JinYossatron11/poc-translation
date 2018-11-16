import { Injectable } from '@angular/core';

@Injectable()
export class TranslationService {

  constructor() { }

  getLanguage(): string {
    return 'th';
  }

}
