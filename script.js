import { collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import {db} from './config.js';

export async function addCard() {
    const title = document.getElementById("card-title").value;
    const description = document.getElementById("card-description").value;
    const image = document.getElementById("card-image").value;  
    
    const collection_ref = collection(db,"card");
    const card_data = {
        title: title,
        description: description,
        image: image
    }
    await addDoc(collection_ref,card_data);
    window.location.reload()
    window.location.href('index.htm')
}

export async function getCards() {
    const collection_ref = collection(db, "card");
    const data = await getDocs(collection_ref)
    console.log(data)
    const filtered_data = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    console.log(filtered_data);
    console.log("filtered data");
    return filtered_data
}