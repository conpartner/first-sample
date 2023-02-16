function clickBtn(){
		alert("메뉴를 준비중입니다.")
}

$(document).ready(function() {
  var currentIndex = 0;
  var items = $('#slideshow img');
  var itemAmount = items.length;

  function cycleItems() {
    var item = $('#slideshow img').eq(currentIndex);
    items.hide();
    item.show();
  }

  var autoSlide = setInterval(function() {
    currentIndex += 1;
    if (currentIndex > itemAmount - 1) {
      currentIndex = 0;
    }
    cycleItems();
  }, 3000);
});