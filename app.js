function onePercent() {
  const inputvalue = document.getElementById('total').value;
  const explination = document.getElementById('explination');
  const speed = document.getElementById('speed');
  const divide = inputvalue / 100;
  const onepercent = divide * 60;
  speed.innerHTML = `
    Choose your speed:
    <span onclick="sloth(${onepercent});" class=sloth>🦥</span>
    <span onclick="snail(${onepercent});" class="snail">🐌</span>
    <span onclick="turtle(${onepercent});" class="turtle">🐢</span>
  `;
}

function sloth(onepercent) {
  console.log('clicked sloth');
  const explination = document.getElementById('explination');
  explination.innerHTML = `
    <div class="boxes">${onepercent}s</div>
    <div class="boxes">${onepercent}s</div>
    <div class="boxes">${onepercent}s</div>
  `;
}

function snail(onepercent) {
  console.log('clicked snail');
  const explination = document.getElementById('explination');
  explination.innerHTML = `
    <span>
      <div class="boxes">${onepercent}s</div>
      <div class="boxes">${onepercent}s</div>
      <div class="boxes">${onepercent}s</div>
      <div class="boxes">${onepercent}s</div>
      <div class="boxes">${onepercent}s</div>
      <div class="boxes">${onepercent}s</div>
      <div class="boxes">${onepercent}s</div>
    </span>
  `;
}

function turtle(onepercent) {
  console.log('clicked turtle');
  const explination = document.getElementById('explination');
  explination.innerHTML = `
    <div class="boxes">${onepercent}s</div>
    <div class="boxes">${onepercent}s</div>
    <div class="boxes">${onepercent}s</div>
  `;
}
