const model = {
    app: {
        user: '',
        lang: 'Eng',
        currentPage: 'mainPage',
        page: [
            'mainPage',
            'dogPage',
            'infoDogPage',
            'infoBreedPage',
            'adoptDogPage',
            'putDogOnHold',
            'planAMeet',
            'contact',
            'adoptedPage',
        ]
    },
    inputs: {
        mainpage: {
            Searchbar: '',
        },
        dogPage: {
            Searchbar: '',
        },
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
        availibleDogs: [
            {
                img: '' ,
                name: '' ,
                age: '',
                gender: '',
                breed: '',
                aboutDog: '',

            },
            {
                img: '' ,
                name: '' ,
                age: '',
                gender: '',
                breed: '',
                aboutDog: '',

            },
            {
                img: '' ,
                name: '' ,
                age: '',
                gender: '',
                breed: '',
                aboutDog: '',

            },
        ],
        adoptedDogs: [
            {
                img: '' ,
                name: '' ,
                age: '',
                gender: '',
                breed: '',
                aboutDog: '',

            },
            {                    
                img: '' ,
                name: '' ,
                age: '',
                gender: '',
                breed: '',
                aboutDog: '',

            },
            {
                img: '' ,
                name: '' ,
                age: '',
                gender: '',
                breed: '',
                aboutDog: '',
    
            },
        ],
    },
}