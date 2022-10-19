/**
 * @function getAdvice : Return random advice
 * @param fetch : Request API url a return data
 * @param dataText : Store data advice
 * @param dataId : Store data id
 * @param quote : Take the value of dataText
 * @param id : Take the value of dataId
 * @event addEventListener : Call getAdvice function 
 * @author Jérémy Thonon <jeremythonon96@hotmail.com>
 */

const url ='https://api.adviceslip.com/advice';
const btn = document.querySelector("button");
const quote = document.querySelector("q");
const id = document.querySelector("span");

getAdvice();

async function getAdvice() {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var dataText = `${data.slip.advice}`;
      var dataId = `${data.slip.id}`;


      quote.innerText = dataText;
      id.innerText = dataId;
    })
    .catch((error) => alert(error))
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  getAdvice();
})










  
