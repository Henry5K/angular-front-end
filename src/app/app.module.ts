import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubSearchComponent } from './pages/search/search.component';
import { GithubService } from './core/services/github.service';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FallbackPipe } from './core/pipes/fallback.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UsersListComponent } from './pages/user-list/user-list.component';
import { UserDetailsPopupComponent } from './components/user-details-popup/user-details-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReplacePipe } from './core/pipes/replace.pipe';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        GithubSearchComponent,
        FallbackPipe,
        UsersListComponent,
        UserDetailsPopupComponent,
        ReplacePipe,
        HomeComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatIconModule,
        NgbModule
    ],
    providers: [GithubService],
    bootstrap: [AppComponent]
})
export class AppModule {}
