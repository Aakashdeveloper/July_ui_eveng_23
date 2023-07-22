class language1{
    constructor(name,country){
       this.name = name;
       this.country = country;
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}


let English = new language1('English','England')


English
language1 {name: 'English', country: 'England', greet: ƒ}
English.greet()
'Say Hi to English'