import { Component, inject, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking-service';
// εργαλεία για reactive forms, ReactiveFormsModule → επιτρέπει reactive forms, FormGroup → ολόκληρη φόρμα, FormControl → κάθε input
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})

// implements OnInit = Αυτό το component έχει ngOnInit(), Όταν φορτώσει το component για πρώτη φορά, τρέξε κάτι
export class Booking implements OnInit {

  // Παίρνεις έτοιμο instance του service χωρίς να το περάσεις στον constructor
  bookingSrv = inject(BookingService);

  // carList → λίστα αυτοκινήτων
  carList: any[] = [];
  // bookingList → λίστα κρατήσεων
  bookingList: any[] = [];

  // Δημιουργία Reactive Form, FormGroup = ολόκληρη η φόρμα, FormControl = κάθε input
  bookingForm: FormGroup = new FormGroup({
    customerName: new FormControl(""),
    customerCity: new FormControl(""),
    mobileNo: new FormControl(""),
    email: new FormControl(""),
    bookingId: new FormControl(0),
    carId: new FormControl(""),
    bookingDate: new FormControl(""),
    discount: new FormControl(""),
    totalBillAmount: new FormControl("")
  })


  // ngOnInit – πότε τρέχει
  ngOnInit(): void {
    this.getCarList();
    this.getBookings();

  }

  // getCarList() – API call
  getCarList() {
    // Καλείς function του service, Το service επιστρέφει Observable, subscribe() σημαίνει: “Όταν έρθουν τα δεδομένα…”
    // Παίρνεις res.data, Το αποθηκεύεις στο carList, Το HTML ενημερώνεται αυτόματα
    this.bookingSrv.getAllCars().subscribe((res: any) => {
      this.carList = res.data;
    })
  }

  getBookings() {
    this.bookingSrv.getAllBooking().subscribe((res: any) => {
      this.bookingList = res.data;
    })
  }

  // event handler Καλείται από το HTML: <button (click)="onSave()">Save</button>
  // formValue = σύνολο των τιμών της φόρμας
  // saveBooking(formValue) = Καλείς το service και Του δίνεις δεδομένα
  // .subscribe((res: any) => { ... }) = Όταν το API απαντήσει, κάνε αυτό
  onSave() {
    // debugger
    const formValue = this.bookingForm.value;
    this.bookingSrv.saveBooking(formValue).subscribe((res: any) => {
      if (res.result) {
        alert("Booking Done");
        // Ξαναφορτώνεις τη λίστα bookings
        this.getBookings();
      }else {
        alert(res.message)
      }
    });
  }

}
