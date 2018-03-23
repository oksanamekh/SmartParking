import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SuperuserConfigurationComponent} from './superuser-configuration/superuser-configuration.component';
import {ParkingDetailComponent} from './parking-detail/parking-detail.component';
import {ClientsComponent} from './clients/clients.component';
import {ProviderListComponent} from './superuser-configuration/providers/provider-list/provider-list.component';
import {LoginComponent} from './auth/login/login.component';
import {ProviderDetailComponent} from './superuser-configuration/providers/provider-detail/provider-detail.component';
import {
    ManagerParkingConfigureComponent,
    ManagerParkingConfigureType
} from './manager/manager-parking-configure/manager-parking-configure.component';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {AddProviderComponent} from './superuser-configuration/providers/add-provider/add-provider.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {UpdateProviderComponent} from './superuser-configuration/providers/update-provider/update-provider.component';
import {ManagerParkingListComponent} from './manager/manager-parking-list/manager-parking-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'configuration', component: SuperuserConfigurationComponent},
    {path: 'parkingdetail/:id', component: ParkingDetailComponent},
    {path: 'configuration', component: SuperuserConfigurationComponent,},
    {path: 'configuration/clients', component: ClientsComponent},
    {path: 'configuration/clients/:id', component: ClientDetailComponent},
    {path: 'configuration/clients/:id/edit/:id', component: ClientDetailComponent},
    {path: 'configuration/clients/edit/:id', component: ClientEditComponent},
    {path: 'configuration/providers', component: ProviderListComponent},
    {path: 'manager-configuration/parkings', component: ManagerParkingListComponent},
    {
        path: 'manager-configuration/parkings/add', component: ManagerParkingConfigureComponent,
        data: {configureType: ManagerParkingConfigureType.ADD}
    },
    {
        path: 'manager-configuration/parkings/edit/:id', component: ManagerParkingConfigureComponent,
        data: {configureType: ManagerParkingConfigureType.EDIT}
    },
    {path: 'login', component: LoginComponent},
    {path: 'configuration/providers/:id', component: ProviderDetailComponent},
    {path: 'configuration/provider/add', component: AddProviderComponent},
    {path: 'configuration/provider/update/:id', component: UpdateProviderComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'configuration/providers/:id', component: ProviderDetailComponent},
    {path: 'configuration/clients/findclients/:input', component: ClientsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}