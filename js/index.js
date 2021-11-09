//loading動畫
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 800,
    delay: (el, i) => 100 + 30 * i
  }); 
  //1100

  var loading = document.querySelector('.loading');
  var wrap = document.querySelector('.wrap');
  setTimeout(function(){
    loading.classList.add("fade_out");
  },5000);

  setTimeout(function(){
    loading.style.display = "none";
    wrap.style.display = "block";
  },3000);

 