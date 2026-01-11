import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layput } from './pages/layput/layput';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { Booking } from './pages/booking/booking';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layput,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'vehicles',
                component: Vehicles
            },
            {
                path: 'booking',
                component: Booking
            }
        ]
    },


];
