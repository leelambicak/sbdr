import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AdminLayoutComponent } from './layouts/admin-layout/admin.layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth.layout.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            // {
            //     path: 'login',
            //     loadChildren: () => 
            //         import('../app/layouts/auth-layout/auth/auth.module').then(m => m.AuthModule) // Lazy load login module
            // },
            { path: 'auth', component: AuthLayoutComponent,
                children: [
            {
                path:'login',
                loadChildren:() =>
                    import('./screens/components/auth/auth.module').then((m) => m.AuthModule)
                  
            },
        ]
        },
            {
                path: 'admin',
                redirectTo: 'dashboard'
            },
            { path: 'admin', component: AdminLayoutComponent,
                children: [

                        {
                            path: 'dashboard',
                            loadChildren: () =>
                                import('./screens/components/admin/admin.module').then((m) => m.AdminModule)
                        },

                ]
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
        
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./screens/screens.module').then((m) => m.ScreensModule)
                    },
                    {
                        path: '',
                        loadChildren: () =>
                            import('./demo/components/dashboard/dashboard.module').then((m) => m.DashboardModule)
                    }
                ]
                // children: [
                //     { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                //     { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                //     { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                //     { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                //     { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                //     { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                // ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
