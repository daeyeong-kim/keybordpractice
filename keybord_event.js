    function canvasT(value){
        var typ = document.getElementById('Typewriter');
        var typValue = Math.round(value);
        var Typ = typ.getContext("2d");
        var grd1 = Typ.createLinearGradient(0,0,value,0);
        Typ.clearRect(0, 0, 800, 600);
        grd1.addColorStop(1,"white");
        grd1.addColorStop(0,"red");
        Typ.font="bold 35px gothic";
        Typ.fillStyle = grd1;
        Typ.fillRect(0,0,300,100);
        Typ.fillText(typValue+"타/분",10,150,50);
    }

  $(document).ready(function(){
    var textup=65;
    var keytime = 0;
    var result =0;
    var keycount = 60;
    var col = ["A man apt to promise is apt to forget","We are not hypocrites in our sleep",
    "Genius does what it must,and talent does what it can","The right people in the right jobs",
    "Experience is the only prophecy of wise men","Time,which strengthens friendship, weakens love",
    "Frailty, thy name is woman","The most wasted day of all if that on which we have not laughed",
    "Marriage has many pains, but celibacy has no pleasures","Better bend than break",
    "Nothing great was ever achieved without enthusiasm","One cannot see the wood for the trees",
    "One cannot see the wood for the trees","A bird in the hand is worth two in the bush",
    "He laughs best who laughs last","Charms strike the sight,but merit wins the soul",
    "The more she spurns my love, the more it grows","Keep something for a rainy day",
    "Variety's the very spice of life","He who rebukes the world is rebuked by the world",
    "He that lends, gives","Years know more than books",
    "He cleaves the clouds","Good luck does not always repeat itself",
    "Rich are the diligent who can command Time - Nature's stock","Every man desires to live long,but no man would be old",
    "A fog cannot be dispelled with a fan","The worst friend and enemy is but Death",
    "A drowning man will catch at a straw","Many hands make light work"];

    if(keytime==0){
      var result =0;
      setInterval(function(){
          keytime ++;
          //alert(keytime);
        },1000);

      setInterval(function(){
        var value=document.getElementById('TextBox').value;
        result=(keycount/keytime)*value.length;
        canvasT(result);
      },100);

    }


  window.onkeypress=function(event){

  var keycode = event.which || event.keyCode;
  if(keycode == 96 || keycode == 126){$('#oneleft').addClass("Onkeypress");};
  if(keycode == 49 || keycode ==33){$('#one').addClass("Onkeypress");};
  if(keycode == 50 || keycode == 64){$('#two').addClass("Onkeypress");};
  if(keycode == 51 || keycode == 35){$('#three').addClass("Onkeypress");};
  if(keycode == 52 || keycode == 36){$('#four').addClass("Onkeypress");};
  if(keycode == 53 || keycode == 37){$('#five').addClass("Onkeypress");};
  if(keycode == 54 || keycode ==94){$('#six').addClass("Onkeypress");};
  if(keycode == 55 || keycode == 38){$('#seven').addClass("Onkeypress");};
  if(keycode == 56 || keycode == 42){$('#eight').addClass("Onkeypress");};
  if(keycode == 57 || keycode == 40){$('#nine').addClass("Onkeypress");};
  if(keycode == 48 || keycode==41){$('#zero').addClass("Onkeypress");};
  if(keycode == 45 || keycode==95){$('#line').addClass("Onkeypress");};
  if(keycode == 61 || keycode ==43){$('#equl').addClass("Onkeypress");};
  if(keycode == 113 || keycode ==81){$('#q').addClass("Onkeypress");};
  if(keycode == 119 || keycode == 87){$('#w').addClass("Onkeypress");};
  if(keycode == 101 || keycode == 69){$('#e').addClass("Onkeypress");};
  if(keycode == 114 || keycode == 82){$('#r').addClass("Onkeypress");};
  if(keycode == 116 || keycode == 84){$('#t').addClass("Onkeypress");};
  if(keycode == 121 || keycode == 89){$('#y').addClass("Onkeypress");};
  if(keycode == 117 || keycode == 85){$('#u').addClass("Onkeypress");};
  if(keycode == 105 || keycode == 73){$('#i').addClass("Onkeypress");};
  if(keycode == 111 || keycode ==79){$('#o').addClass("Onkeypress");};
  if(keycode == 112 || keycode ==80){$('#p').addClass("Onkeypress");};
  if(keycode == 91 || keycode == 123){$('#pleft').addClass("Onkeypress");};
  if(keycode == 93 || keycode == 125){$('#pleftleft').addClass("Onkeypress");};
  if(keycode == 92 || keycode == 124){$('#backSpacebottom').addClass("Onkeypress");};
  if(keycode == 97 || keycode == 65){$('#a').addClass("Onkeypress");};
  if(keycode == 115 || keycode == 83){$('#s').addClass("Onkeypress");};
  if(keycode == 100 || keycode == 68){$('#d').addClass("Onkeypress");};
  if(keycode == 102 || keycode == 70){$('#f').addClass("Onkeypress");};
  if(keycode == 103 || keycode == 71){$('#g').addClass("Onkeypress");};
  if(keycode == 104 || keycode == 72){$('#h').addClass("Onkeypress");};
  if(keycode == 106 || keycode == 74){$('#j').addClass("Onkeypress");};
  if(keycode == 107 || keycode ==75){$('#k').addClass("Onkeypress");};
  if(keycode == 108 || keycode ==76){$('#l').addClass("Onkeypress");};
  if(keycode == 59 || keycode == 58){$('#lleft').addClass("Onkeypress");};
  if(keycode == 39 || keycode == 34){$('#lleftleft').addClass("Onkeypress");};
  if(keycode == 122 || keycode == 90){$('#z').addClass("Onkeypress");};
  if(keycode == 120 || keycode == 88){$('#x').addClass("Onkeypress");};
  if(keycode == 99 || keycode ==67){$('#c').addClass("Onkeypress");};
  if(keycode == 118 || keycode == 86){$('#v').addClass("Onkeypress");};
  if(keycode == 98 || keycode == 66){$('#b').addClass("Onkeypress");};
  if(keycode == 110 || keycode ==78){$('#n').addClass("Onkeypress");};
  if(keycode == 109 || keycode ==77){$('#m').addClass("Onkeypress");};
  if(keycode == 44 || keycode == 60){$('#mleft').addClass("Onkeypress");};
  if(keycode == 46 || keycode == 62){$('#mleftleft').addClass("Onkeypress");};
  if(keycode == 47 || keycode == 63){$('#question_Mark').addClass("Onkeypress");};
  if(keycode == 32){$('#space').addClass("Onkeypress");};
  if(keycode == 13){
    if(textup>=325){return 0;}
    textup+=65;
    $('#TextBoxMain').css({"height":textup+"px"});};

  var problem=document.getElementById('Problem_in').value;
  var valueParent=document.getElementById('TextBox');
  var value=document.getElementById('TextBox').value;


  if(problem.length == value.length){
    $('#TextBox').blur(function(){
      $('#TextBox').focus();
    })                    //input 박스 못벗어나게 하기
    var x = $('#TextBox').focus();
    var height = 65;      //타자  문제  높이
    var muti;         //타자수 나누기 85
    x.css({"outline":"none"});    //area outline 없애기
    var problemCount = Math.round(6*Math.random());
    //var problemCount = 5;       //랜덤 값  검사
    muti = Math.floor(col[problemCount].length/85)+1;
    $('#Problem_in').html(col[problemCount]);
    $('#Problem').css({"height":muti*height+"px"});
    document.getElementById('TextBox').value = "";
    keytime = 0;
    result = 0;
    textup =65;
    $('#TextBoxMain').css({"height":textup+"px"});
  }

};


    window.onkeyup=function(event){

        var keycode = event.which || event.keyCode;
        $('canvas').removeClass("Onkeypress");
        var count = 0;
        var problem=document.getElementById('Problem_in').value;
        var valueParent=document.getElementById('TextBox');
        var value=document.getElementById('TextBox').value;
        var acc = document.getElementById('accuracy');

        if(problem.length == value.length){
          $('#TextBox').blur(function(){
            $('#TextBox').focus();
          })                    //input 박스 못벗어나게 하기
          var x = $('#TextBox').focus();
          var height = 65;      //타자  문제  높이
          var muti;         //타자수 나누기 85
          x.css({"outline":"none"});    //area outline 없애기
          var problemCount = Math.round(6*Math.random());
          //var problemCount = 5;       //랜덤 값  검사
          muti = Math.floor(col[problemCount].length/85)+1;
          $('#Problem_in').html(col[problemCount]);
          $('#Problem').css({"height":muti*height+"px"});
          document.getElementById('TextBox').value = "";
          keytime = 0;
          result = 0;
          textup =65;
          $('#TextBoxMain').css({"height":textup+"px"});
        }


        function canvasG(x){
          var lll = Math.round(x/value.length*100);
          var accvalue=(x/value.length)*500;
          if(accvalue==0){accvalue=1};
          //alert(lll);
          var acc = document.getElementById('accuracy');
          var Acc = acc.getContext("2d");
          var grd = Acc.createLinearGradient(0,0,accvalue,0);
          Acc.clearRect(0, 0, 800, 600);
          grd.addColorStop(0,"green");
          grd.addColorStop(1,"white");
          Acc.fillStyle = grd;
          Acc.font="bold 35px gothic";
          Acc.fillRect(0,0,300,100);
          Acc.fillText(lll+"%",20,150,50);
        };

        for(var i=0;i<value.length;i++){
          if(value[i]==problem[i]){
            count++;
            canvasG(count);
             valueParent.style.color="#8a6d3b";
          }
          else{
            canvasG(count);
            valueParent.style.color="red";
          }
        }

    };

    window.onkeydown=function(event){
      var problem=document.getElementById('Problem_in').value;
      var value=document.getElementById('TextBox').value;
      if(problem.length == value.length){
        $('#TextBox').blur(function(){
          $('#TextBox').focus();
        })                    //input 박스 못벗어나게 하기
        var x = $('#TextBox').focus();
        var height = 65;      //타자  문제  높이
        var muti;         //타자수 나누기 85
        x.css({"outline":"none"});    //area outline 없애기
        var problemCount = Math.round(6*Math.random());
        //var problemCount = 5;       //랜덤 값  검사
        muti = Math.floor(col[problemCount].length/85)+1;
        $('#Problem_in').html(col[problemCount]);
        $('#Problem').css({"height":muti*height+"px"});
        document.getElementById('TextBox').value = "";
        keytime = 0;
        result = 0;
        textup =65;
        $('#TextBoxMain').css({"height":textup+"px"});
      }




    }

    $('#TextBox').blur(function(){
      $('#TextBox').focus();
    })                    //input 박스 못벗어나게 하기
    var x = $('#TextBox').focus();
    var height = 65;      //타자  문제  높이
    var muti;         //타자수 나누기 85
    x.css({"outline":"none"});    //area outline 없애기

    var problemCount = Math.round(col.length*Math.random());
    //var problemCount = 5;       //랜덤 값  검사
    muti = Math.floor(col[problemCount].length/85)+1;
    $('#Problem_in').html(col[problemCount]);
    $('#Problem').css({"height":muti*height+"px"});



  });
