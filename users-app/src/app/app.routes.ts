import { Routes } from "@angular/router";
import { pathToFileURL } from "url";
import { ChatComponent } from "./components/chat/chat.component";
import { UsersComponent } from "./components/users/users.component";

export const APP_ROUTES : Routes = [
  {
    path : "",
    redirectTo : "users",
    pathMatch : 'full'
  },{
    path : "users",
    component : UsersComponent
  },{
    path : "chat",
    component : ChatComponent
  },{
    path : "lazy",
    loadChildren : () => import("./modules/lazy/lazy.module").then(m => m.LazyModule)

    // loadChildren : "./app/modules/lazy/lazy.module#LazyModule"
    // "path/to/lazyModule/lazyModuleFileName#LazyModuleClassName"
    // webpack import statement
  },{
    path : "**",
    redirectTo : "users",
    pathMatch :'full'
  }

]
