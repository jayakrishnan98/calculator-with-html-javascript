function buttonClick(val){
    console.log(val)
    document.getElementById('scrn').value +=val   
    if(val == 'c'){
        document.getElementById('scrn').value = ''
    }
}
function clickEqual(){
    let text = document.getElementById('scrn').value
        let result = eval(text)
        document.getElementById('scrn').value = result
}
