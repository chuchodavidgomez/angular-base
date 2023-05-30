import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';

import { AppComponent } from './app.component';
import { HeroModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
