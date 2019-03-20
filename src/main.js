import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import './backEnd.js';
import $ from 'jquery';
import {Dino} from "./backEnd.js";



  $(document).ready(function() {
    // const dingo = new Dino;
    // // console.log(dingo);
    // dingo.summonDinos();

    // const weHaveDinos = dingo.singleDino;
    // console.log(weHaveDinos);
    const dino = new Dino();
    dino.createDino();
    setTimeout(function() {
      $(".dino-output").text(dino.data[0][2]);
    const word = (dino.data[0][2]).length;
    const blanks = dino.gameWord(word);
    console.log(word);
    }, 100);



  });















  // let promise = new Promise(function(resolve, reject) {
  //   let request = new XMLHttpRequest();
  //   let url = `http://dinoipsum.herokuapp.com/api/?format=json`;
  //   request.onload = function() {
  //     if (this.status === 200) {
  //       resolve(request.response);
  //     } else {
  //       reject(Error(request.statusText));
  //     }
  //   }
  //   request.open("GET", url, true);
  //   request.send();
  // });
  //
  // promise.then(function(response) {
  //   let body = JSON.parse(response);
  //
  //   console.log(body);
  // }, function(error) {
  //   console.log(error);
  // });
