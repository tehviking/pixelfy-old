import Image from '../models/image';

var imageData = function (id) {
  var images = {
    "1": {
      id: "1",
      url: "/img/bey.jpg"
    },
    "2": {
      id: "2",
      url: "/img/flippin-sweet.jpg"
    },
    "3": {
      id: "3",
      url: "/img/freeman.jpg"
    },
    "4": {
      id: "4",
      url: "/img/shake-it-off.jpg"
    },
    "5": {
      id: "5",
      url: "/img/so-fetch.jpg"
    },
    "6": {
      id: "6",
      url: "/img/thought-leader.jpg"
    },
    "7": {
      id: "7",
      url: "/img/dowager-countess.jpg"
    },
    "8": {
      id: "8",
      url: "/img/yeezus.jpg"
    }
  };
  if(arguments.length) {
    return Image.create(images[id]);
  } else {
    var imagesArray = Object.keys(images).map(function(k){
      return Image.create(images[k]);
    });
    return imagesArray;
  }
};

export default imageData;
