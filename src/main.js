import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import $ from 'jquery';
import {Dino} from "./dino.js";



$(document).ready(function() {
  //Dinosaur name using vanilla JS API call
  const dino = new Dino();
  dino.createDino();
  setTimeout(function() {
    console.log(dino.data);
    $(".dino-output").text(dino.data[0][2]);
    (dino.data[0][2]).length;
    const word = (dino.data[0][2]);
    console.log(word);
    const blanks = dino.gameWord(word);
    console.log(blanks);
    $(".dino-output").text(blanks);

  //Dinosaur using AJAX
    $('.acquire-dino').click(function() {
      $('.gif-output').val();
      $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=dinosaur&key=${process.env.giphyKey}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $(".gif-output").html(`<img src="${response.data[Math.floor(Math.random() * 25)].images.original.url}">`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });

  //Random gif generator using AJAX
    $('.searchInput').submit(function(event) {
      event.preventDefault();
      let search = $('.gif-input').val();

      $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.giphyKey}&q=${search}&limit=20&offset=0&rating=g&lang=en`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $(".random-output").html(`<img src="${response.data[Math.floor(Math.random() * 20)].images.original.url}">`);
          console.log(response.data)
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });


  }, 200);

});
