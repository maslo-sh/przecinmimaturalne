let licz=245;
let mian=24;
let x;
let y;

let dzwiek= new Audio("muza.mp3");
let gruby= new Audio("grygor.mp3");
let nie= new Audio("no.mp3");

function odtworz()
{
document.getElementById("sound").onclick=zatrzymaj;
document.getElementById("schreiben").innerHTML="wyłącz muzyczke sb";
dzwiek.loop=true;
dzwiek.play();
}

function zatrzymaj()
{
dzwiek.pause();
dzwiek.currentTime=0;
document.getElementById("sound").onclick=odtworz;
document.getElementById("schreiben").innerHTML="włącz muzyczke sb";
}

function sprawdz()
{
x=document.getElementById("licznik").value;
y=document.getElementById("mianownik").value;

if(x==licz && y==mian)
    {
    document.getElementById("okok").style.display="block";
    document.getElementById("okok").style.left="410.5px";
    document.getElementById("okok").style.top="80px";
    dzwiek.pause();
    gruby.currentTime=0.3;
    gruby.play();
    }
else
    {
    document.getElementById("okok").innerHTML="<img src=\"nope.png\">";
    document.getElementById("okok").style.display="block";
    document.getElementById("okok").style.left="410.5px";
    document.getElementById("okok").style.top="80px";
    dzwiek.pause();
    nie.play();
    nie.currentTime=3;
    setTimeout(function(){location.reload();}, 9400);
    }
}