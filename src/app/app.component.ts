import { Component } from '@angular/core';
import Dexie from 'dexie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialgflowbot';
  db: any;
  constructor(){
    // this.createDatabase();

  }

  private createDatabase() {
    this.db = new Dexie('MyTestDatabase');
    this.db.version(1).stores({
      todos: 'id,value,done'
    });
    this.addToIndexedDb({id: 123, value: 'Test', done: 'done'});
  }


  private addToIndexedDb(todo: any) {
    console.log(this.db)
    this.db.todos
      .add(todo)
      .then(async () => {
        const allItems: any[] = await this.db.todos.toArray();
        console.log('saved in DB, DB is now', allItems);
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }
}
