function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}

let Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}country: "India"greet: () => {return `Say Hi to ${name}`}name: "Hindi"[[Prototype]]: Object
Hindi.greet()
'Say Hi to Hindi'

let French = new language('French','France')
undefined
French
language {name: 'French', country: 'France', greet: ƒ}country: "France"greet: () => {return `Say Hi to ${name}`}name: "French"[[Prototype]]: Object
French.greet()
'Say Hi to French'