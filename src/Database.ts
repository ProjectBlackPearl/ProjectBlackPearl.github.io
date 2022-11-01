// Imports
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { FirebaseConfig } from './FirebaseConfig';

// Loads the config and initalizes the DB
const firebaseConfig = FirebaseConfig

initializeApp(firebaseConfig);
const db = getDatabase();

// Creates a funcion to read data
export function readData() {
    // Template for database data
    var data: Database = {
      img: "",
      date: "",
      user: "",
      message: ""
    }
    
    const dataRef = ref(db)
    onValue(dataRef, (snapshot) => {
        const d = snapshot.val()

        data = {
          img: d.img,
          date: d.date,
          user: d.user,
          message: d.message
        }
    })

    return data 
}

// Exports the function
export const data = readData()
console.log(data.user)

// Interfaces
interface Database {
  img: string,
  date: string,
  user: string,
  message: string
}