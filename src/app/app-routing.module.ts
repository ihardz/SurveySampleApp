import { LayoutPage } from './pages/layout/layout.page';
import { AboutPage } from './pages';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        redirectTo: 'survey',
        pathMatch: 'full'
      },
      {
        path: 'survey',
        loadChildren: () => import('./survey/survey.module').then( m => m.SurveyModule)
      },
      {
        path: 'about',
        pathMatch: 'full',
        data: { title: 'About' },
        component: AboutPage
      }
    ]
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
