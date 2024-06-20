const endDate= "23 June 2024 6:41 PM";

document.getElementById("end-Date").innerText = endDate;

const inputs= document.querySelectorAll("input");
function clock(){
    const end = new Date(endDate);
    const now = new Date()
    const diff= (end - now)/1000;
    inputs[0].value=Math.floor(Math.abs(diff /3600 / 24));
    inputs[1].value=Math.floor(Math.abs((diff /3600)%24));
    inputs[2].value=Math.floor(Math.abs((diff /60)%60));
    inputs[3].value=Math.floor(Math.abs(diff %60));


    // console.log(day);
}
clock();

setInterval(
    () => {
        clock()
    },
    1000
)