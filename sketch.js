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

  // let images = ['ant/CANDYGRAM.jpg1516305882.gif.temp.gif'];
  // let image = choose(images);
  let imgEl = document.createElement('img');
  // imgEl.style.position = 'static';
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
  // container.appendChild(makeImage(image));

  for (let i = 0; i < randint(2, 3); i++) {
    let src = 'gifs/' + randint(1, 252) + '.gif';
    let img = makeImage(src);
    img.style.width = randint(100, 500) + 'px';
    img.style.left = randint(0, 90) + '%';
    img.style.top = randint(0, 90) + '%';
    // img.style.left = randint(0, container.offsetWidth - img.width) + 'px';
    // img.style.top = randint(0, container.offsetHeight - img.height) + 'px';
    container.appendChild(img);
  }

  return container;
}

for (var i = 1; i <= 48; i++) {
  let container = document.querySelector('#container');
  let img = makeRandomAnimation('ant/' + i + '.gif');
  // img.style.top = randint(-1000, window.innerHeight) + 'px';
  // img.style.left = randint(-1000, window.innerWidth) + 'px';
  img.style.transform = 'rotate('+randint(-10, 10)+'deg) scale('+(Math.random()+0.4) +')';
  container.appendChild(img);
}
