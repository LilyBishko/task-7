// 1
let newWindow = window.open('', '', 'width=300,height=300');

setTimeout(function() {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function() {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(function() {
  newWindow.close();
}, 6000);

// 2
function changeCSS() {
    let paragraph = document.getElementById('text');
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
  }
  
  let button = document.querySelector('button');
  button.addEventListener('click', changeCSS);
  
  // 3
  const button1 = document.getElementById('button1');
        const button2 = document.getElementById('button2');
        const button3 = document.getElementById('button3');
        const link = document.getElementById('link');

        button1.addEventListener('click', function () {
            document.body.style.backgroundColor = 'blue';
        });

        button2.addEventListener('dblclick', function () {
            document.body.style.backgroundColor = 'pink';
        });

        button3.addEventListener('mousedown', function () {
            document.body.style.backgroundColor = 'brown';
        });

        button3.addEventListener('mouseup', function () {
            document.body.style.backgroundColor = 'white';
        });

        link.addEventListener('mouseover', function () {
            document.body.style.backgroundColor = 'yellow';
        });

        link.addEventListener('mouseout', function () {
            document.body.style.backgroundColor = 'white';
        });

// 4
const optionsSelect = document.getElementById('options');
        const chooseAndDeleteButton = document.getElementById('chooseAndDelete');

        chooseAndDeleteButton.addEventListener('click', function () {
            const selectedOptions = Array.from(optionsSelect.selectedOptions);
            selectedOptions.forEach(option => {
                optionsSelect.removeChild(option);
            });
        });
// 5 
const messageButton = document.getElementById('messageButton');

        messageButton.addEventListener('click', () => {
            messageButton.textContent = 'I was pressed!';
        });

        messageButton.addEventListener('mouseenter', () => {
            alert('Mouse on me!');
        });

        messageButton.addEventListener('mouseleave', () => {
            alert('Mouse is not on me!');
        });

// 6
function updateWindowSize() {
    const windowSizeElement = document.getElementById('windowSize');
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    windowSizeElement.textContent = `Ширина: ${windowWidth}px, Висота: ${windowHeight}px`;
}
window.addEventListener('load', updateWindowSize);
window.addEventListener('resize', updateWindowSize);
