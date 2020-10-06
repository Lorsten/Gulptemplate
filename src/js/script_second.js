
class minClass {
    constructor(fornamn,efternamn){
      this.fornamn = fornamn;
      this.efternamn = efternamn;
    }
     fullname(){
        return this.fornamn + " "+this.efternamn;
    }
    get myName(){
        return this.fullname();
    }
}
let myname = new minClass("olof", "Andersson");
console.log(myname.myName);


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
