const vocals = ["a", "i", "u", "e", "o"];
const vReplace = ["p", "b"];

const source = document.getElementById("text");
const result = document.getElementById("result");

const alert = document.getElementById("alert");
const msg = document.getElementById("message");

document.getElementById("btn-convert").addEventListener("click", function () {
  const wordArr = source.value.toLowerCase().split(" ");

  if (wordArr == "") {
    msg.innerText = "Teks sumber kosong!";
    alert.style.display = "block";

    return;
  }

  const res = [];
  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];
    for (let j = 0; j < word.length; j++) {
      if (
        (j == 0 || j == 1 || j == 2) &&
        j != word.length - 1 &&
        word[j + 1] != "m" &&
        vocals.includes(word[j]) &&
        !vocals.includes(word[j + 1])
      ) {
        const wordSplit = word.split("");

        wordSplit.splice(j + 1, 0, "m");
        word = wordSplit.join("");
      }

      if (vReplace.includes(word[j])) {
        const v = word.replace(word[j], "v");
        word = v;
      }
    }

    const nya = word.slice(word.length - 3);
    if (nya == "nya") {
      const x = word.replace("nya", ".x");
      word = x;
    }

    res.push(word);
  }

  result.value = res.join(" ");
});

document.getElementById("copy-result").addEventListener("click", () => {
  if (result.value != "") {
    navigator.clipboard.writeText(result.value);

    msg.innerText = "Teks berhasil disalin!";
    alert.style.display = "block";

    return;
  }
});
