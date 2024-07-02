function handleRegister(event) {
    event.preventDefault();
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    let arr;
    if (user == "") {
        alert("please enter your name");
    }
    else if (pass == "") {
        alert("please enter your password");
    } else {
        var userDetails = {
            username: user,
            password: pass
        }
      let arrObj=localStorage.getItem("userDetails");
       if(arrObj){
        arrObj = JSON.parse(arrObj);
        arrObj.push(userDetails);
        localStorage.setItem("userDetails",JSON.stringify(arr));
       }
       else{
        localStorage.setItem("userDetails",JSON.stringify([userDetails]))
       }
       window.location.replace("http://127.0.0.1:5500/login.html");  
    }
}
  
function handleLogin(event){
    event.preventDefault();
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;
    console.log(user)
    if(user==""){
       alert("Please Enter your Username:");
}else if (pass==""){
        alert("please Enter your password:");
    }else{
        userDetails= {
            username:user,
            password:pass
        }
        let arrObj=localStorage.getItem("userDetails");
        if(arrObj){
           arrObj = JSON.parse(arrObj);
           console.log(arrObj);
           let correctuser= false;
           let correctpass= false;
           arrObj.map((value)=>{
            if(value.username==user){
                correctuser = true;
                if(value.password==pass){
                    correctpass = true;
                }
            }
          
        })
        if(correctuser && correctpass){
            alert("login successfull")
        }else if(correctuser){
            alert("enter correct password")
        }else{
            alert("enter correct username")
        }
        
    }
        }
    }