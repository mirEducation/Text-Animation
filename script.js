let string = "The rain tapped softly against the window.";
let charsInDoc = [];
var debounce = false;

function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, 1000*s));
}

// this function creates a label object for every char
// in the string
for (const char in string) {
    const label = document.createElement("label")
    if (string[char] === " ") {
        label.textContent = "\u00A0";
    } else {
        label.textContent = string[char];
    }
    document.body.appendChild(label);
    charsInDoc.push(label);
}

function animate(char) {
    char.style.fontVariant = "small-caps";
    char.style.color = "hotPink";
    setTimeout(() => {
      char.style.fontVariant = "normal";
      char.style.color = "black";
    }, 350);
}

async function runAnimation() {
  if (debounce === false) {
    debounce = true;
    for (const char of charsInDoc) {
      if (char === charsInDoc[charsInDoc.length-1]) {
        animate(char);
        await sleep(0.35);
        debounce = false;
        break;
      }
      animate(char);
      await sleep(0.03);
    }
  }

}