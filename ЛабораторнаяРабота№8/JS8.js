"use strict"

function mouse_over(ontext) {
        ontext.style.color = "red";
    }

function mouse_out(outtext) {
        outtext.style.color = "black";
    }

var Color = true;

function mouse_click_size(colortext) {

    if (Color) {
        colortext.style.fontSize = "22px";
        Color = false;
    } 
    else {
        colortext.style.fontSize = "16px";
        Color = true;
    }
}

var Img = true;

function mouse_click_img() {
    let img = document.getElementById("Img");

    if (Img) {
        img.src = "picture1.png";
        Img = false;
        } 
    else {
        img.src = "picture2.png";
        Img = true;
    }
}

var text = true;

function mouse_click_text() {
    let text_img = document.getElementById("Text");
        if (text) {
        text_img.innerHTML = "<img src='РУДЖ.jpg' height='135px' width='333px' alt=''>"
    text = false;
        }   
    else {
        text_img.innerHTML = "Кто открыл мне этот мир, <br/> Не жалея своих сил?<br/> И всегда оберегала?<br/>Лучшая на свете МАМА.";
        text = true;
        }   
    }

function mouse_over_img(OverImg) {
        OverImg.style.width = "317px";
    }

function mouse_out_img(OutImg) {
        OutImg.style.width = "200px";
    }

function db_click_border(DBBorder) {
        DBBorder.style.border = "5px solid white";
    }

function click_border(border) {
        border.style.border = "1px solid black";
    }

    