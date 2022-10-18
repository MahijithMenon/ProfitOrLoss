const initialValue=document.getElementById('initial')
const stocks=document.getElementById('quantity')
const finalValue=document.getElementById('final')
const check=document.getElementById('check')
const outputDiv=document.getElementById('outputDiv')
check.addEventListener('click',calculateProfitorLoss);
function calculateProfitorLoss(){
    if(initialValue.value==="" || finalValue.value===""){
        alert("Please enter value");
    }
    else{
    let output,outputP;
if(initialValue.value>finalValue.value){
output=(initialValue.value-finalValue.value)*(stocks.value);
outputP=(output/initialValue.value)*100
outputDiv.style.color="red"
outputDiv.style.margin="20px"
outputDiv.style.padding="20px"
outputDiv.style.border="2px solid black"
outputDiv.innerText=`You made a loss of ${output} and loss percentage of ${outputP}%`;
}
else if(finalValue.value>initialValue.value){
    output=(finalValue.value-initialValue.value)*(stocks.value);
    outputP=(output/initialValue.value)*100;
    outputDiv.style.margin="20px"
    outputDiv.style.padding="20px"
    // outputDiv.style.color="red"
    outputDiv.style.color="green"
    outputDiv.innerText=`You made a profit of ${output} and profit percentage of ${outputP}%`;
}
else{
    outputDiv.style.color="black"
    outputDiv.innerText=`No Profit No Loss`;

}
}
}