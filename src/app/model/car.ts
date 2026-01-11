// Δηλώνω ΜΟΝΤΕΛΑ ΔΕΔΟΜΕΝΩΝ (data models)


// Δηλώνω Ένα αντικείμενο που περιγράφει ΠΩΣ είναι ένα αυτοκίνητο στην εφαρμογή σου
// class model το χρησιμοποιω για: για binding με φόρμες (ngModel), για δημιουργία αντικειμένων (new CarModel()), για αποστολή δεδομένων σε API
export class CarModel {
    // Αντιπροσωπεύουν μία εγγραφή αυτοκινήτου (1 row DB)
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    dailyRate: number;
    carImage: string;
    regNo: string;

    // εδώ ο constructor: Αποφεύγεις undefined στο template, Το [(ngModel)] δουλεύει χωρίς errors, Μπορείς να κάνεις reset με: this.newCarObj = new CarModel(); (Άρα πολύ σωστό για forms)
    constructor() {
        this.carId = 0;
        this.brand = '';
        this.model = '';
        this.year = 0;
        this.color = '';
        this.dailyRate = 0;
        this.carImage = '';
        this.regNo = '';
    }
}

// Ένα interface δηλώνει το ΣΧΗΜΑ ενός αντικειμένου
// Το σχήμα της απάντησης που σου δίνει το backend API
export interface APIResponse {
    message: string;
    result: boolean;
    data: any;
}