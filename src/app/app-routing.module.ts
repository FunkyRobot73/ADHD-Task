// import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox', //Previously on...
    // redirectTo: 'to-do-list',
    pathMatch: 'full'
  },
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('./pages/to-do-list/to-do-list.module').then( m => m.ToDoListPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
  // {
  //   path: 'add-daily-task',
  //   loadChildren: () => import('./pages/add-daily-task/add-daily-task.module').then( m => m.AddDailyTaskPageModule)
  // },
  
  
  
  {
    path: 'achievements',
    loadChildren: () => import('./pages/achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'add-note',
    loadChildren: () => import('./pages/add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'video-diary',
    loadChildren: () => import('./pages/video-diary/video-diary.module').then( m => m.VideoDiaryPageModule)
  },
  {
    path: 'images-diary',
    loadChildren: () => import('./pages/images-diary/images-diary.module').then( m => m.ImagesDiaryPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then( m => m.TodoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
