// Service = κλάση που κρατάει business logic & data access, όχι UI
// API calls, κοινή λογική, reusable κώδικας, separation of concerns


// Αυτή η κλάση μπορεί να μπει στο Dependency Injection system
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Δημιουργεί ένα και μόνο instance του service, Για όλη την εφαρμογή, Δεν χρειάζεται να το δηλώσεις σε module
@Injectable({
  providedIn: 'root',
})
export class BookingService {

  // apiUrl: string = "https://freeapi.miniprojectideas.com/api/CarRentalApp"; 
  // αντι για το απο πανω που ειναι το σωστο εβαλα το απο κατω για να τρεξει το proxy γιατι ειχα θεμα με τον browser και τα cors
  apiUrl: string = ("/api/CarRentalApp")

  // Το BookingService χρειάζεται HttpClient
  // Το private http: Δημιουργεί property, Είναι διαθέσιμο σε όλες τις μεθόδους της κλάσης
  // Εδώ χρησιμοποίησες constructor injection (εντελώς ΟΚ για services)
  constructor(private http: HttpClient) { }

  // Δεν κάνει subscribe εδώ, Επιστρέφει Observable = Σου δίνει μια υπόσχεση ροής δεδομένων που θα έρθουν στο μέλλον
  getAllBooking() {
    return this.http.get(this.apiUrl + "/geAllBookings")
  }

  getAllCars() {
    return this.http.get(this.apiUrl + "/GetCars")
  }

  saveBooking(obj: any) {
    return this.http.post(this.apiUrl + "/CreateNewBooking", obj)
  }

}
