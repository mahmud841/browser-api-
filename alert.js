console.log("I am here ");
//alert('Mother Bangali coming ');// ata console log korle modal er moto dekhabe 

const motherComing = () => {
    alert('Ammu is coimg.Ready for reading...');
}

/* const askPicnic = () =>{
    confirm('Are you going to picnic?');
} */
const askPicnic = () =>{
    const response =  confirm('Are you going to picnic?');
    console.log(response);

    if (response === true){
        alert('khela hobe');
    }
    else{
        console.log('khela hobe na');
    }
}

/* const askPicnic = () => {
    const response = confirm('ready to go');
    console.log(response);
    if(response ===true){
        alert('taka de')
    }else{
        console.log('no');
    }
}
 */
const askName = () => {
   const name = prompt('What is your name?');
   if (name){
    console.log(name); 
   }
   
}