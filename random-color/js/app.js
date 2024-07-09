const getColor = () => {
    const ranmdomNumber = Math.floor(Math.random()*16777215);
    const randomColor = "#" + ranmdomNumber.toString(16);
    document.getElementById("colors").innerHTML=randomColor;
    document.body.style.backgroundColor=randomColor
    // console.log(ranmdomNumber,randomColor);
}

document.getElementById("mybtn").addEventListener("click",getColor)

getColor();