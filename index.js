var words = ['A Junior Flutter Developer'],
    part,
    i = 0,
    offset = 1,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 1) {
        forwards = true;
        i++;
        offset = 1;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// $(document).ready(function() {
//   // Ambil tinggi konten terbesar dari semua card
//   var maxHeight = 0;

//   $('.card-portfolio').each(function() {
//     var cardHeight = $(this).height();
//     if (cardHeight > maxHeight) {
//       maxHeight = cardHeight;
//     }
//   });

//   // Atur tinggi semua card menjadi tinggi terbesar
//   $('.card-portfolio').height(maxHeight);
// });