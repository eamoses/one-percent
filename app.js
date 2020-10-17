function onePercent() {
  const inputvalue = document.getElementById('total').value;
  const outputdiv = document.getElementById('output');
  const explination = document.getElementById('explination');
  const speed = document.getElementById('speed');
  const divide = inputvalue / 100;
  const onepercent = divide * 60;
  outputdiv.innerHTML = `
    ${onepercent}
  `;
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
    This means you will have to run at your goal pace for ${onepercent} seconds.
  `;
}

function snail(onepercent) {
  console.log('clicked snail');
  const explination = document.getElementById('explination');
  explination.innerHTML = `
    This means you will have to run at your goal pace for ${onepercent} seconds.
  `;
}

function turtle(onepercent) {
  console.log('clicked turtle');
  const explination = document.getElementById('explination');
  explination.innerHTML = `
    This means you will have to run at your goal pace for ${onepercent} seconds.
  `;
}
