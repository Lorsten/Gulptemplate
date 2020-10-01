


class minClass {
    constructor(fornamn,efternamn){
      this.fornamn = fornamn;
      this.efternamn = efternamn;
    }
     fullname(){
        return this.fornamn + " "+this.efternamn;
    }
    get myname(){
        return this.fullname();
    }
}

let name = new minClass("olof", "Andersson");
console.log(name.myname);


const arr = [
    {
        "name" : "erik",
        "gift" : 'nej'
     },
    {
        "name" : 'Pär',
        "gift" : 'ja',

     },
    {
        "name" : 'Johan',
        "gift" : 'nej'
    }
    
]
const married = arr.filter(x => x.gift == 'ja');
console.log(JSON.stringify(married));
