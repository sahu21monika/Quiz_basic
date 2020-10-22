const correctanswer =['B','B','A','A'];
const form = document.querySelector('.quiz-form');
const result= document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(e);
    console.log(e.target[1].value);
    let score=0;
    let useranswers= [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    useranswers.forEach((answer,index)=>{
        if(answer===correctanswer[index]){
            score+=25;
        }
        result.classList.remove('d-none');
        setTimeout(()=>{
            scrollTo(0,0);
        });
          let output=0;
          const timer = setInterval(()=>{
            result.querySelector('span').innerText=`${output}%`;
            if(output===score){
                clearInterval(timer);
            }
            else{
                output++;
            }
          },10);
         
       


    });
    console.log(score);
});