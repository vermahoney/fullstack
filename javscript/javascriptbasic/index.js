// function x(){
//     var i=1;
//     setTimeout(function()  {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }
// x();

function x(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
           
        }
         close(i);
    }
    console.log("namste javascript"); 
}
x();