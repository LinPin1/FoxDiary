// menu
$(function(){

    // 點擊
    $("button.btn").on("click", function(){
      
      // -open 的樣式切換
      $(this).closest("aside.aside").toggleClass("-open");
      $(this).closest("button.btn").toggleClass("-on");
      
    });
  
  });
  // 