const vocals = ["a", "i", "u", "e", "o"];
const vReplace = ["p", "b"];

const source = document.getElementById("text");
const result = document.getElementById("result");

document.getElementById("btn-convert").addEventListener("click", function () {
  const wordArr = source.value.toLowerCase().split(" ");

  if (wordArr == "") {
    alert("Teks sumber kosong!");

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
    alert("Teks berhasil disalin!");
  } else {
    alert("Teks hasil kosong!");
  }
});

function alert(message) {
  const parent = document.getElementById("alert");
  const alert = `<div
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <p class="m-0">${message}</p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>`;

  parent.innerHTML = alert;
}
