var display = document.getElementById("display");
function C(){
    display.value = '';
}
function Delete(){
    if(display.value.length <12 ){
        display.style.fontSize = "64px";
    }
    if (display.value.endsWith('  ')) {
        display.value = display.value.slice(0, -3);
    }
    else if(display.value.endsWith(' ')) {
        display.value = display.value.slice(0, -2);
    }
    if(display.value == "Error" || display.value == "undefined" || display.value == "function Error() { [native code] }" || display.value == "Infinity" || display.value == "NaN" ){
        display.value = '';
    }
    else{
        display.value = display.value.slice(0,-1);
    }
}

// function equal(){
//     display.value = eval(display.value);
// }
var R = '';
function equal(){
    if(display.value.length >11 ){
        display.style.fontSize = "40px";
    }else{
        display.style.fontSize = "64px";
    }
    
    // ///////////////////////////////////////////////////////////////////////////
    


    display.value = display.value.replace(/\x/g, '*');
    display.value = display.value.replace(/\÷/g, '/');
    display.value = display.value.replace(/\e/g, 'Math.E');

    display.value = display.value.replace(/\^/g, '**');
    display.value = display.value.replace(/\π/g, 'Math.PI'); 


    display.value = display.value.replace(/sin\(/g , 'Math.sin((Math.PI / 180)*');
    display.value = display.value.replace(/cos\(/g , 'Math.cos((Math.PI / 180)*');
    display.value = display.value.replace(/tan\(/g , 'Math.tan((Math.PI / 180)*');
    display.value = display.value.replace(/log\(/g , 'Math.log10(');



    if(!display.value.includes('m')){
        
        R = eval(display.value);
        // console.log(1);
        // console.log(R);
    }
    else if(document.getElementById("m").value = 'm'){
        display.value = display.value.replace(/\m/g, R);
        // document.getElementById("m").value = 'TT';
        // console.log(2);
        // console.log(R);
    }
    // else if(document.getElementById("m").value == 'TT'){
    //     display.value = display.value.replace(/\m/g, R);
    //     console.log(3);
    //     console.log(R);
    // }


    // display.value = display.value.replace(/\m/g, s );
    // if(display.value != "Error" || display.value != "undefined" || display.value != "function Error() { [native code] }" || display.value != "Infinity" || display.value != "NaN" ){
    //     var m = (display.value) ;    //
    //     var s=eval(m);
        // display.value = display.value.replace(/\m/g, n );
        // console.log(m);
        // console.log(s);
    // }
    
    // if (!(display.value).includes('m')) {
    //     result = console.log((eval(display.value))).value;
    //     console.log(result);
    // }
    // else if((display.value).includes('m')) {
    //     display.value = display.value.replace(/\m/g, result );
    // }

        
        // var A = eval(display.value);
        // // var A = (22/7);
        // display.value = display.value.replace(/\m/g, A); 
        
    
    // try{
        
    // display.value = eval(display.value);
    // 
    //     Scroll();
    // }
    // catch(error){
    //     display.value = "Error";
    // }

    try {
        


        var result = eval(display.value);
        if (isNaN(result) || result === Infinity) {
            throw "Error";      //?
            
        }
        display.value = result;
   
    } catch (error) {
        display.value = "Error";
    }
    
}



function Add(input){

        if(display.value.length >11 ){
            display.style.fontSize = "40px";
        }else{
            display.style.fontSize = "64px";
        }
        
    if(display.value == "Error" || display.value == "undefined" || display.value == "function Error() { [native code] }" || display.value == "Infinity" || display.value == "NaN" ){
        display.value = input;
 
    Scroll(); 
    }
    // else if(input == " ^ "){
    //     display.value += ' ** ';
    // }
    else{
        display.value += input;
  
    Scroll(); 
    }
}

    function Scroll() {
        document.getElementById('display').scrollLeft = document.getElementById('display').scrollWidth;
    }






