//ESERCIZIO 1//

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontaEta(altroUtente) {
        if (this.age > altroUtente.age) {
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
        } else if (this.age < altroUtente.age) {
            return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
        }
    }
}


const utente1 = new User("Mario", "Rossi", 30, "Roma");
const utente2 = new User("Luca", "Bianchi", 25, "Milano");


const risultatoConfronto = utente1.confrontaEta(utente2);
console.log(risultatoConfronto);

//ESERCIZIO 2//

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    stessoProprietario(altroPet) {
        return this.ownerName === altroPet.ownerName;
    }
}

function creaPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const nuovoPet = new Pet(petName, ownerName, species, breed);
    aggiungiPetAllaLista(nuovoPet);


    document.getElementById('petForm').reset();
}

function aggiungiPetAllaLista(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);

    
    const petsInList = petList.getElementsByTagName('li');
    for (let i = 0; i < petsInList.length - 1; i++) {
        const petInList = petsInList[i];
        const petData = petInList.textContent.split(', Proprietario: ')[1];
        const altroPet = new Pet('', petData, '', ''); 
        if (pet.stessoProprietario(altroPet)) {
            alert('Attenzione: Hai già un animale con lo stesso proprietario nella lista.');
            petList.removeChild(listItem);
            return;
        }
    }
}