console.log("我是JS")

let n = 1

getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id 
                multiPages.appendChild(li)
            })
            n+=1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const obj = JSON.parse(request.response)
            console.log(obj)
            sayHi.textContent = "Hello " + obj.name 
        }     
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // console.log(request.responseXML)  // 返回的是一个DOM
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent.trim()
                console.log(text)
            } else{
                alert("xml加载失败")
            }
        }
    }
    request.send()
  }

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            // 4表示完成，但不知道成功还是失败
            if (request.status >= 200 && request.status < 300) {
                // console.log(request.readyState)
                // console.log(request.status)
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)

            } else{
                alert("html加载失败")
            }
        }
    }
    request.send()
  }

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = ()=>{
      if(request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
            console.log(request.response)
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }else {
            alert("JS加载失败")
        }
      }

  }
  request.send()
}

getCSS.onclick = () => {
    // 1. 创建HttpRequest()对象
    const request = new XMLHttpRequest()
    // 2. 调用对象的open方法，只传2个参数
    request.open('GET', '/style.css')
    // 3. 监听onload和onerror事件
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                // 创建style节点
                const style = document.createElement("style")
                // 填写返回的内容
                style.innerHTML = request.response
                // 插到head里
                document.head.appendChild(style)
            }else {
                alert("CSS加载失败")
            }
          }
    }
    // 4. 调用send方法，发送请求
    request.send()

}
