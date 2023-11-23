import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { CakeComponent } from './cake/cake.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';


const routesConfig: Routes = [

{
  path: '',
  component: HomeComponent,
  title: 'Home'
},
{
  path: 'contact',
  component: ContactComponent,
  title: 'Contact'
},
{
  path: 'card',
  component: CardComponent,
  title: 'Card'
},
{
  path: 'cake',
  component: CakeComponent,
  title: 'Cake'
},
{
  path: 'burger',
  component: BurgerMenuComponent,
  title: 'Cake'
},


];

export default routesConfig;
