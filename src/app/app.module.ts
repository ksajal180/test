import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ManageHotelsComponent } from './manage-hotels/manage-hotels.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { AttractionComponent } from './attraction/attraction.component';
import { PolicyComponent } from './policy/policy.component';
import { HotelAmentiesComponent } from './hotel-amenties/hotel-amenties.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GalleryComponent,
    ManageHotelsComponent,
    RoomsComponent,
    HotelViewComponent,
    AttractionComponent,
    PolicyComponent,
    HotelAmentiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
