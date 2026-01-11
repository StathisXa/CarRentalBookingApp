// component → λέει στον Angular: αυτό είναι component, inject → σύγχρονος τρόπος Dependency Injection, αντί για constructor injection (μπορεί να δημιουργεί αυτόματα αντικείμενα αυτής της κλάσης και να στα δίνει όποτε τα ζητήσεις)
import { Component, inject } from '@angular/core';
// Θα χρησιμοποιήσω ένα μοντέλο δεδομένων (CarModel), APIResponse (interface) → το σχήμα της απάντησης από το backend
import { APIResponse, CarModel } from '../../model/car';
// Θα χρησιμοποιήσω φόρμες (ngModel)
import { FormsModule } from '@angular/forms';
// Το εργαλείο του Angular για: επικοινωνία με API
import { HttpClient } from '@angular/common/http';
// lifecycle hook (σαν useEffect(() => {}, []))
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})

// Εδώ ζει όλη η λογική, Το HTML βλέπει μόνο ό,τι υπάρχει εδώ μέσα, implements OnInit → υποχρεώνει να έχεις ngOnInit()
export class Vehicles implements OnInit {

  // Δηλώνεις μια μεταβλητή newCarObj, τύπου CarModel, Το form state, Όλα τα inputs γράφουν εδώ
  newCarObj: CarModel;
  // Δώσε μου ένα έτοιμο HttpClient instance
  http = inject(HttpClient);
  // Λίστα αυτοκινήτων, Γεμίζει από API, Χρησιμοποιείται στο @for
  carList: CarModel[] = [];

  // Στον constructor δημιουργείς ένα καινούριο αντικείμενο, Αν δεν το κάνεις → undefined, Το form θέλει αντικείμενο για binding
  constructor() {
    this.newCarObj = new CarModel();
  }


  // φορτώνεις δεδομένα μόλις ανοίξει το component
  ngOnInit(): void {
    this.getAllCars();
  }

  // λογο του proxy αλλαξα τα url απο https://freeapi.miniprojectideas.com/api/CarRentalApp/ σε αυτο που εχω βαλει /api/CarRentalApp/

  // Στέλνει HTTP GET, Το <APIResponse> λέει στον TS τι περιμένεις, subscribe = όταν έρθει απάντηση
  // res.data → array από αυτοκίνητα, Γεμίζει το carList, Το HTML αυτόματα ενημερώνεται
  getAllCars() {
    this.http.get<APIResponse>("/api/CarRentalApp/GetCars").subscribe((res: APIResponse) => {
      this.carList = res.data;
    })
  }


  onSaveCar() {
    // debugger
    // Στέλνεις: το API Call ειναι τυπου post και η απάντηση θα είναι τύπου APIResponse
    // μετα βάζεις μεσα στην παρενθεση URL, body → newCarObj, .subscribe((res: APIResponse) => { = Το HTTP είναι async, subscribe = “όταν έρθει απάντηση…”
    this.http.post<APIResponse>("/api/CarRentalApp/CreateNewCar", this.newCarObj).subscribe((res: APIResponse) => {
      // debugger
      if (res.result) {
        alert("Vehicle Created Success");
        this.getAllCars();
      }
      else {
        alert(res.message)
      }
    })
  }


  onUpdateCar() {
    // debugger
    this.http.put<APIResponse>("/api/CarRentalApp/UpdateCar", this.newCarObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Vehicle Updated Success");
        this.getAllCars();
      }
      else {
        alert(res.message)
      }
    })
  }

  // Δέχεται ένα id τύπου number, Αυτό το id αντιστοιχεί στο carId του αυτοκινήτου που θέλουμε να διαγράψουμε
  onDeleteCarById(id: number) {
    // debugger
    this.http.delete<APIResponse>("/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Vehicle Delete Success");
        this.getAllCars();
      }
      else {
        alert(res.message)
      }
    })
  }

  // Παίρνει ένα αντικείμενο CarModel από το row που πατήθηκε το edit button
  onEdit(data: CarModel) {
    // Χρησιμοποιεί spread operator (...) για να φτιάξει αντίγραφο του αντικειμένου
    this.newCarObj = { ...data };
  }

}
