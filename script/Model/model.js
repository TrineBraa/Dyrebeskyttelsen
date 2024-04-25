const model = {
    app: {
        APIKey: 'sdtdDAPMDN5k2oqaDdfYFw==x5ASKJiWlFbnQW39', 
        user: '',
        lang: 'No',
        currentPage: 'mainPage',
        dogToAdopt: null,
        breedToSearch: null,
        page: [
            {id: 'mainPage', description: 'Hjem', isSearchable: true},
            {id: 'dogPage', description: 'Tilgjengelige hunder', isSearchable: true},
            {id: 'infoDogPage', description: 'Info om hunden', isSearchable: false},
            {id: 'infoBreedPage', description: '', isSearchable: false},
            {id: 'adoptDogPage', description: 'Adopter hund', isSearchable: false},
            {id: 'putDogOnHold', description: 'Reserver hund', isSearchable: false},
            {id: 'planAMeet', description: 'Planlegg møte', isSearchable: false},
            {id: 'contact', description: 'Kontakt oss', isSearchable: true},
            {id: 'adoptedPage', description: 'Alle våre adopterte hunder', isSearchable: true},
            {id: 'searchBreedPage', description: 'Rase Informasjon', isSearchable: true},
         
        ]
    },
    inputs: {
        searchbar: null,
        mainpage: {},
        planAMeet: {
            inputName: '',
            inputMail: '',
            inputPhone: '',
            inputTime: '',
        },
        putDogOnHold: {
            inputName: '',
            inputMail: '',
            inputPhone: '',
            inputWhatDog: '',
        },
    },
    data: {
        breedInfo: {
            name: null,
            img: null,
            energy: null,
            drooling: null,
            shedding: null,
            barking: null,
            good_with_children: null,
            good_with_other_dogs: null,
            trainability: null,
        },
        availibleDogs: [
            {
                id: 1,
                img: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg' ,
                name: 'Bella' ,
                age: '8',
                gender: 'Tispe',
                breed: 'Bolognese',
                aboutDog: 'bla bla bla',

            },
            {
                id: 2,
                img: 'https://hobbyhund.no/wp-content/uploads/2023/07/whippet.png' ,
                name: 'Lilja' ,
                age: '4',
                gender: 'Tispe',
                breed: 'Whippet',
                aboutDog: 'bla bla bla',

            },
            {
                id: 3,
                img: 'https://b3310731.smushcdn.com/3310731/wp-content/uploads/2023/05/schaferhund-sitter.jpg?lossy=2&strip=1&webp=1' ,
                name: 'Rodrigo' ,
                age: '9',
                gender: 'Hann',
                breed: 'Schæferhund',
                aboutDog: 'bla bla bla',

            },
        ],
        adoptedDogs: [
            {
                id: 1,
                img: 'https://hobbyhund.no/wp-content/uploads/2023/07/malteser-hunderase.png' ,
                name: 'Petunia' ,
                age: '5',
                gender: 'Tispe',
                breed: 'Malteser',
                aboutDog: 'bla bla bla',

            },
            {     
                id: 2,               
                img: 'https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg' ,
                name: 'Felix' ,
                age: '6',
                gender: 'Hann',
                breed: 'Husky',
                aboutDog: 'bla bla bla',

            },
            {
                id: 3,
                img: 'https://www.zooplus.no/magasin/wp-content/uploads/2019/03/norsk-elghund-gr%C3%A5.webp' ,
                name: 'Rex' ,
                age: '11',
                gender: 'Hann',
                breed: 'Elghund (grå)',
                aboutDog: 'bla bla bla',
    
            },
        ],
    },
}