getCSS.onclick = ( ) =>{
    const request = new XMLHttpRequest();
    request.open('GET',"/1.css");
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const style=document.createElement("style")
            style.innerHTML=request.response
            document.head.appendChild(style)
        }else{
            alert("shibai")
        }
    }
    request.send();
};
getJS.onclick = ( ) =>{
    const request = new XMLHttpRequest();
    request.open('GET',"/2.js");
    request.onload =()=>{
        const script =document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    };
    request.onerror =()=>{
        console.log('no')
    };
    request.send();
};
// getHTML.onclick = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "/3.html");
//     request.onload = () => {
//       // 创建 div 标签
//       const div = document.createElement("div");
//       // 填写 div 内容
//       div.innerHTML = request.response;
//       // 插入到身体里
//       document.body.appendChild(div);
//     };
//     request.onerror = () => {};
//     request.send();
//   };
getHTML.onclick=()=>{
    const request =new XMLHttpRequest()
    request.open('Get',"/3.html")
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
           const div=document.createElement("div");
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    };
    request.send()
};
getXML.onclick=()=>{
    const request =new XMLHttpRequest()
    request.open('Get',"/4.xml")
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const dom =request.responseXML
            const text =dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
};

getJSON.onclick=()=>{
    const request =new XMLHttpRequest()
    request.open('Get',"/5.json")
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
           const object = JSON.parse(request.response)
           myName.textContent=object.name
        }
    };
    request.send()
};