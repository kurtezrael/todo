import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
 
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    todos: string[] = [];
    todo: string;
 
    constructor(public navCtrl: NavController, public alertCtrl:  AlertController) {
    this.addValid = new FormGroup({
        name: new FormControl('', Validators.required)
    });
    }
 
    add() {
        this.todos.push(this.todo);
        this.todo = "";
    }
 
    delete(item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    showAlert() {
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Successfully added to the list.',
        buttons: ['OK'] });
      alert.present();
    }

    showDelAlert() {
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Deleted.',
        buttons: ['OK'] });
      alert.present();
    }

    edit(item) {
        var index = this.todos.indexOf(item, 0);
            if (index > -1) {
            this.todos.splice(index, 1);
            this.todo = item;

        }
            
        
    }
    


}