hiddenSpeakers = document.querySelector('#speakers-2');
buttonHouse = document.querySelector('.more');

function seeMore(){
  hiddenSpeakers.classList.add('speakers-2-show');
  buttonHouse.innerHTML = `<button class="more-speakers" type="button" onclick="seeLess()">
  <span class="more-speaker-text">Less</span>
  <i class="fa-solid fa-angle-up"></i>
</button>`

}

function seeLess(){
  hiddenSpeakers.classList.remove('speakers-2-show');
  buttonHouse.innerHTML = `<button class="more-speakers" type="button" onclick="seeMore()">
  <span class="more-speaker-text">More</span>
  <i class="fa-solid fa-angle-down"></i>
</button>`

}