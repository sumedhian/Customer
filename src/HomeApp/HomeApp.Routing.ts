import { HomeComponent } from 'src/HomeApp/HomeApp.HomeComponent';


export const HomeRoutes = [
    { path: '', component: HomeComponent},
    { path: 'Home', component: HomeComponent},
    { path: 'Customer', loadChildren: () => import('../CustomerApp/CustomerApp.CustomerModule').then(m => m.CustomerModule)}

];
// Case sensitive -- turn off
// Web server
