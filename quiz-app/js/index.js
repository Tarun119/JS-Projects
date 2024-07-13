const questions = [{
        'que': 'Which of the following is the markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'which of the following is a fruit?',
        'a':'ladyfinger',
        'b':'tomato',
        'c':'potato',
        'd':'broccoli',
        'correct':'b',
    },
    {
        'que': '2+2=?',
        'a':'22',
        'b':'2',
        'c':'4',
        'd':'44',
        'correct':'c',
    }
]
let index=0,right =0,wrong =0, length= questions.length;
const quesBox= document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuetions = () =>{
    if(index == length){
        return endQuiz();
    }
    reset(); 
    const data = questions[index]
    quesBox.innerText= `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuetions();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    // document.getElementById("sub").innerText = "END QUIZ";
    document.getElementById("box").innerHTML = `
        <h3>Thank you!</h3>
        <h4>Correct: ${right}</h4>
        <h4>Wrong: ${wrong}</h4>
    `
}
// inital call
loadQuetions();