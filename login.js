var jwt=localStorage.getItem("jwt");
if (jwt !=null){
    window.location.href='./index.html';
}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const data = {"username":username,
    "password":password };

    fetch('https://www.mecallapi.com/api/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data['status'] == 'ok') {
            localStorage.setItem("jwt",data["accessToken"]);
            location.reload();
            }else{
                Swal.fire(
                   data["message"],
                    'That thing is still around?',
                    'error'
                  )
            }
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    /*const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.mecallapi.com/api/login");
    xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "username":username,
        "password":password
    }));
    xhttp.onreadystatechange = function(){
        if (this.readyState== 4){
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            alert(objects)
            if (objects['status'] == 'ok') {
            localStorage.setItem("jwt",objects["accessToken"]);
            }else{
                Swal.fire(
                   objects["message"],
                    'That thing is still around?',
                    'error'
                  )
            }
        }
    }*/

}