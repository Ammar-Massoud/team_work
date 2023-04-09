const btn = document.getElementById("speack")
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}


//add event speaking to btn
btn.addEventListener("click" ,() =>{
  speak(" hello world");
})