(function() {
  let paragraph = document.querySelector(".typing");
  let currentIndex = 0;

  function startTyping(text) {
    let p = new Promise((resolve, reject) => {
      let setInt;

      setInt = setInterval(() => {
        if (text.length > currentIndex) {
          paragraph.textContent += text[currentIndex];
          currentIndex++;
        } else {
          clearInterval(setInt);

          resolve();
        }
      }, 10);
    });

    p.then(() => {
      let list = document.querySelectorAll(".hidden");
      console.dir(list);

      for (let [key, value] of Object.entries(list)) {
        console.log(`keys ${key} values ${value}`);
        console.dir(value);
        value.style.height = "300px";
        //  list[item].classList.remove('hidden');
      }
      console.dir(list);
    });
  }

  var x =
    "LEAD to program menedżerski, składający się z cyklu warsztatów, prowadzony we współpracy z najbardziej prestiżowymi firmami w Polsce: PwC, Procter&Gamble, Microsoft. Rozwinie zarówno umiejętności miękkie jak i techniczne, które pozwolą rozpocząć Twoją karierę!";
  startTyping(x);
})();
