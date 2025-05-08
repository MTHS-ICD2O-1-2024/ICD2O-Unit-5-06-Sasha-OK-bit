// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: May 2025
// This file contains the JS functions for index.html


function calculaterandomnumber () {
  const Results1 = parseInt(document.getElementById('firstvalue').value)
  const Results2 = parseInt(document.getElementById('secondvalue').value)
  const number = Results1 * Results2


  while (i < number) {
    text = text + "The number is " + i;
    i = i + 1 ;
  }
  document.getElementById("demo").innerHTML = text;
}


