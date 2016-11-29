//Exercise-1 (JediName)
// function jediName(firstname,lastname){

// var firstname=firstname.slice(1,3);
// var lastname=lastname.slice(1,4);
// return lastname+firstname;

// }


//Exercise-2(To Infinity)
// function beyond(num){
// 	if(!isFinite(num)){
// 	    console.log("ABout beyond");
// 	} else if(isFinite(num) && num > 0){
// 		console.log("To Infinity ");
// 	} else if(isFinite(num) && num < 0){
//         console.log("To negative Infinity");
// 	}else if(num==0){
//         console.log("Staying Home");
// 	}
// }

// beyond(-3);

//Exercise-3(Decode and Encode string)
function decode(text){
 
  var words=text.split(' ');
  console.log(words);
  
  
   for(var i=0;i<words.length; i++){
     if(words[i].startsWith('a')){
    
     var test=words[i].replace(/"/g,"");
     console.log(test.substring(1,2));
   }
    else  if(words[i].startsWith('b')){
    
     var test=words[i].replace(/"/g,"");
     console.log(test.substring(2,3));
   }
     else if(words[i].startsWith('c')){
    
     var test=words[i].replace(/"/g,"");
     console.log(test.substring(3,4));
   }
     else if(words[i].startsWith('d')){
    
     var test=words[i].replace(/"/g,"");
     console.log(test.substring(4,5));
   }
     else {
    
     var test=words[i].replace(/"/g,"");
     console.log(' ');
   }
   }
  

}

decode('craft block argon meter bells brown croon droop');

decode('craft block argon meter bells brown croon droop');