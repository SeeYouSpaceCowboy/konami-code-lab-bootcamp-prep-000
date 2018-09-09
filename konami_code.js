const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let idx = 0
  
  document.body.addEventListener("keydown", function(e) {
    const key = e.which
    
    idx = codes[idx] == key ? idx++ : 0 
    
    if (idx === codes.length) {
      alert("Hurray!");
      idx = 0
    }
  });
}
