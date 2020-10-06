let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext =['.com', '.net'];

function domainGenerator (arr1,arr2,arr3,arr4){
     for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                for (let l=0; l < arr4.length; l++) {

                    let output = arr1[i] + arr2[j] + arr3[k] + arr4[l];
                    console.log(output);
                }
            }
        }
     }
};
domainGenerator(pronoun, adj, noun, ext);
