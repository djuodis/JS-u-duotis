// 1 Užduotis

var legalAge = 20;
var clientAge = 25;

if (clientAge >= legalAge) {
    alert('Legal Age')
    console.log('Legal Age')
} else {
    alert('Not Legal Age')
    console.log('Not Legal Age')
}


// // 2 Užduotis 

var vardas = 'Deividas'.length

if (vardas > 6){
    console.log('Ilgas Vardas')
}else {
        console.log()
}

// // 3 Užduotis

var myage = 23

if (myage > 100 || myage < 0){
    console.log('Invalid age')
}
else if (myage >= 1 && myage <= 18){
        console.log('Child')
}
 else if (myage >= 19 && myage <=99){
         console.log('Adult')
}

 
// // 4 Užduotis

var car = 'BMW'

if (car == 'BMW' || car == 'Mini' || car =='Rolls-Royce'){
    console.log('BMW group')
}else if  (car == 'VW' || car == 'Audi' || car == 'Bentley' || car == 'Bugatti' || car == 'Lamborghini' || car == 'Porsche' ){
    console.log('VW group')
}else {
    console.log('Other Company')
}
