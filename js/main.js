$("#searchInput").keyup(function(search){
    var $captions = document.querySelectorAll("data-title");
    var $image = ".row img";
    if ( search.toLowerCase === $captions.toLowerCase ) {
      $image.show;
    } else {
      $image.hide;
    }
  });