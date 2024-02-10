
let prev = 1
function changeImage(num) {
    var prevEle = document.getElementsByClassName('imagebutton' + prev)[0];
    prevEle.classList.remove('selected')
    prev = num;
    document.getElementsByClassName('imagebutton' + num)[0].classList.add('selected');
    document.getElementsByClassName('imageLoad')[0].src='images/image' + num + '.png';
}