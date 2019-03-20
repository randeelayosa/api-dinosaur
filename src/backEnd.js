import $ from 'jquery';
//
//
// export class Dino {
//   constructor (input) {
//     this.dino = input;
//   }
//
//



export class Dino {
  constructor() {
    this.data;
  }

  createDino(){
    const that = this;
    const promise = new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      that.data = body;
    }, function(error) {
      console.log(error);
    });
  }

  gameWord(word){
    const blankWord = function(word) {
      word.replace(/[abcdefghijklmnopqrstuvwxyz]/gi, "_");
    };
    return blankWord;
  }

}







//
//  export class Dino {
//    constructor() {
//     this.data = [];
//    }
//
//    addToArr(data) {
//
//      alert(data);
//      this.data = data;
//      // console.log(this.data);
//    }
//   summonDinos() {
//
//    const getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=json');
//    getDinos.then(function(response){
//      // console.log(response);
//      // this.singleDino = response;
//      // console.log(this.singleDino[1][2]);
//      this.addToArr(response);
//    });
//   }
//
//
//   fillContainer(html) {
//     $('.dino-output').html(html);
//   };
//   oops() {
//      console.log('Where did all the dinosaurs go?');
//   };
// }

  // getArr(arr) {
  //   const dinoArr = arr[0];
  //   console.log(dinoArr[0]);
  // }

 // const testTest= new Dino;
 // console.log(testTest.summonDinos())
