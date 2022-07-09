function tosquare(squarevalue) //สูตรหาพื้นที่สี่เหลี่ยมจตุรัส
{
    let result = squarevalue * squarevalue
    return result.toFixed(2) + " ซม.";
}
function tosquareProgram(result){
    alert(tosquare(result))
}

function torectangle() //สูตรหาพื้นที่สี่เหลี่ยมผืนผ้า 
{
    const value1 = doc.getElementById(inputValuerectangle1).innerHTML
    const value2 = doc.getElementById(inputValuerectangle2).innerHTML
    const result = torectangleProgram(value1,value2)
    alert(result)
}

function torectangleProgram(width,long){
    return (width*long)
    
}


console.log("RunningtoRectangle function")

function display(elementId, result) //ฟังชั่นดิสเพลย์
{
    document.getElementById(elementId).innerHTML= result
}






