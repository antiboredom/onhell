function choose(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeImage(src) {
  let img = document.createElement('img');
  img.src = src;
  return img;
}

function makeRandomAnimation(imgsrc) {
  let container = document.createElement('div');
  container.classList.add('leak');

  let imgEl = document.createElement('img');
  imgEl.addEventListener('load', function() {
    container.style.width = imgEl.width + 'px';
    container.style.height = imgEl.height + 'px';
  });
  imgEl.src = imgsrc;
  container.appendChild(imgEl);

  let backgroundGif = 'gifs/bgs/' + randint(1, 66) + '.gif';
  if (Math.random() > 0.5) backgroundGif = 'gifs/' + randint(1, 252) + '.gif';

  container.style.backgroundImage = 'url(' + backgroundGif + ')';
  container.style.backgroundSize = randint(1, 100) + '%';

  for (let i = 0; i < randint(2, 3); i++) {
    let src = 'gifs/' + randint(1, 252) + '.gif';
    let img = makeImage(src);
    img.style.width = randint(100, 500) + 'px';
    img.style.left = randint(0, 90) + '%';
    img.style.top = randint(0, 90) + '%';
    container.appendChild(img);
  }

  return container;
}

for (var i = 1; i <= 48; i++) {
  let container = document.querySelector('#container');
  let img = makeRandomAnimation('ant/' + i + '.gif');
  img.style.transform = 'rotate('+randint(-10, 10)+'deg) scale('+(Math.random()+0.4) +')';
  container.appendChild(img);
}

let cats = Array.from(document.querySelectorAll('#cats img'));
cats.forEach((c) => {
  c.style.display = 'none';
  setTimeout(() => {
    c.style.width = randint(100, 200) + 'px';
    c.style.display = 'block';
    c.classList.add('cat');
  }, randint(1000, 10000));
});

if (Math.random() > 0.9) {
  document.querySelector('#hedvalink').href = 'https://www.google.com/search?num=20&safe=off&sa=G&hl=en&tbs=simg:CAEStAIJ4uIX3ri2anUaqAILEKjU2AQaBgg9CEIIFQwLELCMpwgaYgpgCAMSKM8a3RruGs0ayhqbD-QE5QSRHM4a6SS8L7Yvvi_1rJL0vqiXqJI87vy8aMC5PQKiDlt8sSpQF1dR_1tfTtt3E3WnQEqsYQOGZS8smOVNwuetk6c2rZBKmSO7-JgCAEDAsQjq7-CBoKCggIARIEks_1hmAwLEJ3twQkakQEKGQoGZ2FybW9u2qWI9gMLCgkvbS8wNGg0cXcKHAoJZ2VudGxlbWFu2qWI9gMLCgkvbS8wMTlwNXEKFgoDdGll2qWI9gMLCgkvbS8wMXJrYnIKGwoIc25hcHNob3TapYj2AwsKCS9tLzA2cGcyMgohCg9wdWJsaWMgc3BlYWtpbmfapYj2AwoKCC9tLzA2OGs0DA&q=rick+astley&tbm=isch&ved=0ahUKEwikmf6Lz57ZAhVDs1kKHV6rBcUQsw4IOg&biw=1436&bih=759&dpr=2';
}
