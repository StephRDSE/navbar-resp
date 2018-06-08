import { Injectable } from '@angular/core';
import REAL_DATA from './real-data';
@Injectable({
  providedIn: 'root'
})
export class RealService {

public myReals = REAL_DATA.reals;

  constructor() {
    console.log(REAL_DATA);
}
}
