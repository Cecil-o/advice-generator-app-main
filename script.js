let adviseId = document.getElementById("adviseId");
let adviseText = document.getElementById("adviseText");
let generateButton = document.getElementById("generateButton");

let base_url = "https://api.adviceslip.com/advice";


let generateAdvice = async () => {

    try {
  
      let response = await fetch(base_url);
      let data = await response.json();
      console.log(data);
      adviseId.innerText = `#${data.slip.id}`;
      adviseText.innerText = `"${data.slip.advice}"`;
  
      console.log(response);
  
    } catch (error) {
  
      console.log(error);
  
    }
  
  };

  generateButton.addEventListener("click", generateAdvice);