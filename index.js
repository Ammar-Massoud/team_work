obj = {
        name: "Ibrahim",
        printname: function() {
                console.log(this.name)
                console.log("hello world from Mustafa")
        }
}
obj.printname()
//SPEAK HELLO WORLD
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

speak("Hello WORLD");