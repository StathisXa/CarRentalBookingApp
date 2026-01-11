// Θέλω να δημιουργήσω ένα Component, δηλαδή ένα κομμάτι UI με δικό του template και styles
import { Component, inject } from '@angular/core';
// Θέλω να χρησιμοποιήσω λειτουργίες φόρμας, όπως ngModel για two-way binding
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', // // Όνομα του tag που θα βάλεις στο HTML: <app-login></app-login>
  standalone: true,
  imports: [FormsModule], // // Προσπάθεια να εισάγει το FormsModule (λάθος αν δεν είναι standalone)
  templateUrl: './login.html', // // Από ποιο αρχείο HTML να πάρει το UI
  styleUrl: './login.css', // // Από ποιο αρχείο CSS να πάρει τα στυλ
})

export class Login {


  loginObj: any = {
    userName: '',
    password: ''
  };
  // δώσε μου το instance του Router για να το χρησιμοποιήσω σε αυτό το component
  // Η inject() λειτουργία αντικαθιστά την κλασική προσέγγιση με constructor
  router = inject(Router);

  onLogin() {
    if (this.loginObj.userName == 'admin' && this.loginObj.password == '11223') {
      this.router.navigateByUrl("/dashboard")
    }
    else {
      alert("Wrong Credentials")
    }
  }

}
