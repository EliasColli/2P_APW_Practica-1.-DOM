const a = document.forms["form1"];
     let texto = "";
     for (let i = 0; i < a.length; i++) {
       texto += a.elements[i].value + "<br>";
     }
     document.getElementById("demo2").innerHTML = texto;
     console.log(a);