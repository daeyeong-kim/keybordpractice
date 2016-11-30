window.onload=function(){
  var acc = document.getElementById('accuracy');
  var Acc = acc.getContext("2d");
  var grd = Acc.createLinearGradient(0,0,1000,0);
  grd.addColorStop(0,"green");
  grd.addColorStop(1,"white");
  Acc.fillStyle = grd;
  Acc.fillRect(0,0,300,100);

  var typ = document.getElementById('Typewriter');
  var Typ = typ.getContext("2d");
  var grd1 = Typ.createLinearGradient(0,0,1,0);
  grd1.addColorStop(0,"white");
  grd1.addColorStop(1,"red");
  Typ.fillStyle = grd1;
  Typ.fillRect(0,0,300,100);

  var oneLeft = document.getElementById('oneleft');
  var oneleft = oneLeft.getContext('2d');
  oneleft.font="100px Verdana";
  oneleft.fillStyle="black";
  oneleft.fillText("~",50,80);
  oneleft.fillText("`",50,180);

  var one = document.getElementById('one');
  var one = one.getContext('2d');
  one.font="bold 60px Verdana";
  one.fillStyle="black";
  one.fillText("!",60,60);
  one.fillText("1",60,130);

  var two = document.getElementById('two');
  var two = two.getContext('2d');
  two.font="bold 60px Verdana";
  two.fillStyle="black";
  two.fillText("@",60,60);
  two.fillText("2",60,130);

  var three = document.getElementById('three');
  var three = three.getContext('2d');
  three.font="bold 60px Verdana";
  three.fillStyle="black";
  three.fillText("#",60,60);
  three.fillText("3",60,130);

  var four = document.getElementById('four');
  var four = four.getContext('2d');
  four.font="bold 60px Verdana";
  four.fillStyle="black";
  four.fillText("$",60,60);
  four.fillText("4",60,130);

  var five = document.getElementById('five');
  var five = five.getContext('2d');
  five.font="bold 60px Verdana";
  five.fillStyle="black";
  five.fillText("%",60,60);
  five.fillText("5",60,130);

  var six = document.getElementById('six');
  var six = six.getContext('2d');
  six.font="bold 60px Verdana";
  six.fillStyle="black";
  six.fillText("^",60,60);
  six.fillText("6",60,130);

  var seven = document.getElementById('seven');
  var seven = seven.getContext('2d');
  seven.font="bold 60px Verdana";
  seven.fillStyle="black";
  seven.fillText("&",60,60);
  seven.fillText("7",60,130);

  var eight = document.getElementById('eight');
  var eight = eight.getContext('2d');
  eight.font="bold 60px Verdana";
  eight.fillStyle="black";
  eight.fillText("*",60,60);
  eight.fillText("8",60,130);

  var nine = document.getElementById('nine');
  var nine = nine.getContext('2d');
  nine.font="bold 60px Verdana";
  nine.fillStyle="black";
  nine.fillText("(",60,60);
  nine.fillText("9",60,130);

  var zero = document.getElementById('zero');
  var zero = zero.getContext('2d');
  zero.font="bold 60px Verdana";
  zero.fillStyle="black";
  zero.fillText(")",60,60);
  zero.fillText("0",60,130);

  var line = document.getElementById('line');
  var line = line.getContext('2d');
  line.font="bold 60px Verdana";
  line.fillStyle="black";
  line.fillText("_",60,60);
  line.fillText("-",60,130);

  var equl = document.getElementById('equl');
  var equl = equl.getContext('2d');
  equl.font="bold 60px Verdana";
  equl.fillStyle="black";
  equl.fillText("+",60,60);
  equl.fillText("=",60,130);

  var q = document.getElementById('q');
  var q = q.getContext('2d');
  q.font="bold 100px Verdana";
  q.fillStyle="black";
  q.fillText("Q",70,100);

  var w = document.getElementById('w');
  var w = w.getContext('2d');
  w.font="bold 100px Verdana";
  w.fillStyle="black";
  w.fillText("W",70,115);

  var e = document.getElementById('e');
  var e = e.getContext('2d');
  e.font="bold 100px Verdana";
  e.fillStyle="black";
  e.fillText("E",70,115);

  var r = document.getElementById('r');
  var r = r.getContext('2d');
  r.font="bold 100px Verdana";
  r.fillStyle="black";
  r.fillText("R",70,115);

  var t = document.getElementById('t');
  var t = t.getContext('2d');
  t.font="bold 100px Verdana";
  t.fillStyle="black";
  t.fillText("T",70,115);

  var y = document.getElementById('y');
  var y = y.getContext('2d');
  y.font="bold 100px Verdana";
  y.fillStyle="black";
  y.fillText("Y",70,115);

  var u = document.getElementById('u');
  var u = u.getContext('2d');
  u.font="bold 100px Verdana";
  u.fillStyle="black";
  u.fillText("U",70,115);

  var i = document.getElementById('i');
  var i = i.getContext('2d');
  i.font="bold 100px Verdana";
  i.fillStyle="black";
  i.fillText("I",70,115);

  var o = document.getElementById('o');
  var o = o.getContext('2d');
  o.font="bold 100px Verdana";
  o.fillStyle="black";
  o.fillText("O",70,115);

  var p = document.getElementById('p');
  var p = p.getContext('2d');
  p.font="bold 100px Verdana";
  p.fillStyle="black";
  p.fillText("P",70,115);

  var pleft = document.getElementById('pleft');
  var pleft = pleft.getContext('2d');
  pleft.font="bold 60px Verdana";
  pleft.fillStyle="black";
  pleft.fillText("{",60,60);
  pleft.fillText("[",60,130);

  var pleftleft = document.getElementById('pleftleft');
  var pleftleft = pleftleft.getContext('2d');
  pleftleft.font="bold 60px Verdana";
  pleftleft.fillStyle="black";
  pleftleft.fillText("}",60,60);
  pleftleft.fillText("]",60,130);

  var backSpacebottom = document.getElementById('backSpacebottom');
  var backSpacebottom = backSpacebottom.getContext('2d');
  backSpacebottom.font="bold 50px Verdana";
  backSpacebottom.fillStyle="black";
  backSpacebottom.fillText("|",60,60);
  backSpacebottom.fillText("\\",60,130);

  var a = document.getElementById('a');
  var a = a.getContext('2d');
  a.font="bold 100px Verdana";
  a.fillStyle="black";
  a.fillText("A",70,115);

  var s = document.getElementById('s');
  var s = s.getContext('2d');
  s.font="bold 100px Verdana";
  s.fillStyle="black";
  s.fillText("S",70,115);

  var d = document.getElementById('d');
  var d = d.getContext('2d');
  d.font="bold 100px Verdana";
  d.fillStyle="black";
  d.fillText("D",70,115);

  var f = document.getElementById('f');
  var f = f.getContext('2d');
  f.font="bold 100px Verdana";
  f.fillStyle="black";
  f.fillText("F",70,115);

  var g = document.getElementById('g');
  var g = g.getContext('2d');
  g.font="bold 100px Verdana";
  g.fillStyle="black";
  g.fillText("G",70,115);

  var h = document.getElementById('h');
  var h = h.getContext('2d');
  h.font="bold 100px Verdana";
  h.fillStyle="black";
  h.fillText("H",70,115);

  var j = document.getElementById('j');
  var j = j.getContext('2d');
  j.font="bold 100px Verdana";
  j.fillStyle="black";
  j.fillText("J",70,115);

  var k = document.getElementById('k');
  var k = k.getContext('2d');
  k.font="bold 100px Verdana";
  k.fillStyle="black";
  k.fillText("K",70,115);

  var l = document.getElementById('l');
  var l = l.getContext('2d');
  l.font="bold 100px Verdana";
  l.fillStyle="black";
  l.fillText("L",70,115);

  var lleft = document.getElementById('lleft');
  var lleft = lleft.getContext('2d');
  lleft.font="bold 50px Verdana";
  lleft.fillStyle="black";
  lleft.fillText(":",60,50);
  lleft.fillText(";",60,110);

  var lleftleft = document.getElementById('lleftleft');
  var lleftleft = lleftleft.getContext('2d');
  lleftleft.font="bold 50px Verdana";
  lleftleft.fillStyle="black";
  lleftleft.fillText("\"",60,60);
  lleftleft.fillText("\'",60,130);

  var z = document.getElementById('z');
  var z = z.getContext('2d');
  z.font="bold 100px Verdana";
  z.fillStyle="black";
  z.fillText("Z",70,115);

  var x = document.getElementById('x');
  var x = x.getContext('2d');
  x.font="bold 100px Verdana";
  x.fillStyle="black";
  x.fillText("X",70,115);

  var c = document.getElementById('c');
  var c = c.getContext('2d');
  c.font="bold 100px Verdana";
  c.fillStyle="black";
  c.fillText("C",70,115);

  var v = document.getElementById('v');
  var v = v.getContext('2d');
  v.font="bold 100px Verdana";
  v.fillStyle="black";
  v.fillText("V",70,115);

  var b = document.getElementById('b');
  var b = b.getContext('2d');
  b.font="bold 100px Verdana";
  b.fillStyle="black";
  b.fillText("B",70,115);

  var n = document.getElementById('n');
  var n = n.getContext('2d');
  n.font="bold 100px Verdana";
  n.fillStyle="black";
  n.fillText("N",70,115);

  var m = document.getElementById('m');
  var m = m.getContext('2d');
  m.font="bold 100px Verdana";
  m.fillStyle="black";
  m.fillText("M",70,115);

  var mleft = document.getElementById('mleft');
  var mleft = mleft.getContext('2d');
  mleft.font="bold 50px Verdana";
  mleft.fillStyle="black";
  mleft.fillText("<",60,60);
  mleft.fillText(",",60,110);

  var mleftleft = document.getElementById('mleftleft');
  var mleftleft = mleftleft.getContext('2d');
  mleftleft.font="bold 50px Verdana";
  mleftleft.fillStyle="black";
  mleftleft.fillText(">",60,60);
  mleftleft.fillText(".",60,110);

  var question_Mark = document.getElementById('question_Mark');
  var question_Mark = question_Mark.getContext('2d');
  question_Mark.font="bold 50px Verdana";
  question_Mark.fillStyle="black";
  question_Mark.fillText("?",60,60);
  question_Mark.fillText("/",60,120);



}
