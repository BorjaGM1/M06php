function enviaPeticionGetXMLHttp(){
  let c1 = document.getElementById("c1").value;
  let c2 = document.getElementById("c2").value;
  let c3 = document.getElementById("c3").value;
  let c4 = document.getElementById("c4").value;
  let xmlHttp = new XMLHttpRequest()
  xmlHttp.open("POST","r1.php",true)
  xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlHttp.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
        console.log("El recurso SI existe")
        let JSONansw = JSON.stringify(xmlHttp.responseText);
        console.log(JSONansw)
        let error1 = JSONansw.substr(73, 22);
        if (error1 === "value is required"){
          document.getElementById("s1").innerHTML = error1;
        }
        if (error1 === "value is required"){
          document.getElementById("s1").innerHTML = error1;
        }
        if (error1 === "value is required"){
          document.getElementById("s1").innerHTML = error1;
        }


    }else{
      //console.log("El recurso no existe")
    }
  }
  xmlHttp.send();
}

function validateThisInput(num){
  let bro = document.getElementById("c1").nextElementSibling;
  if (num.length===0){
    bro.innerHTML = "";
    return;
  }
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
      bro.innerHTML=this.responseText
    }
  }
  xmlhttp.open("POST","r2.php?q="+num,true);
  xmlhttp.send();
}
