let adviseId = document.getElementById("adviseId");
let adviseText = document.getElementById("adviseText");
let generateButton = document.getElementById("generateButton");

let base_url = "https://api.adviceslip.com/advice";


let generateAdvice = async () => {

    try {
  
      const response = await fetch(base_url);
  
      console.log(response);
  
    } catch (error) {
  
      console.log(error);
  
    }
  
  };