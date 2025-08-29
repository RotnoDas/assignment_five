const callHistoryData = [];
let loveCount = 0;
const availableHeart = document.getElementById("heart-available");
const loveIcons = document.getElementsByClassName("love");
for (const icon of loveIcons) {
  icon.addEventListener("click", function () {
    loveCount++;
    availableHeart.innerText = loveCount;
  });
}
let copyCount = 2;
const availableCopyCount = document.getElementById("copy-count");
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  const copyBtn = card.querySelector(".copy-btn");
  copyBtn.addEventListener("click", function () {
    copyCount++;
    availableCopyCount.innerText = copyCount;
    const number = card.querySelector("h1.text-2xl").innerText;
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
  });
});
const callHistoryContainer = document.getElementById("call-history-container");
const coinCount = document.getElementById("coin-count");
cards.forEach((card, index) => {
  const callBtn = card.querySelector(".call-btn");
  callBtn.addEventListener("click", function () {
    let currentCoin = parseInt(coinCount.innerText);
    if (currentCoin < 20) {
      alert(
        "You don't have enough coins. You need at least 20 coins to make a call"
      );
      return;
    }
    currentCoin -= 20;
    coinCount.innerText = currentCoin;
    const serviceType = card.querySelector("h1.calling").innerText;
    const number = card.querySelector("h1.text-2xl").innerText;
    alert(`Calling ${serviceType} ${number}...`);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between bg-[#FAFAFA] rounded-xl h-[70px] items-center m-3">
        <div class="ml-5">
          <h1 class="font-semibold">${serviceType}</h1>
          <p class="text-[#5C5C5C]">${number}</p>
        </div>
        <div class="mr-5">
          <h1>${new Date().toLocaleTimeString()}</h1>
        </div>
      </div>
    `;
    callHistoryContainer.appendChild(div);
  });
});
document
  .getElementById("clear-call-history-btn")
  .addEventListener("click", function name(params) {
    callHistoryContainer.innerHTML = "";
  });