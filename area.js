function tosquare(squarevalue) //สูตรหาพื้นที่สี่เหลี่ยมจตุรัส
{
    let result = squarevalue * squarevalue
    return result.toFixed(2) + " ซม.";
}
function tosquareProgram(result){
    alert(tosquare(result))
}

function torectangleProgram(){
    const value1 = doc.getElementById(inputValuerectangle1).innerHTML= result
    const value2 = doc.getElementById(inputValuerectangle2).innerHTML= result
    const result = calculaterectangle(width,long)
    alert(torectangleProgram(result))
}
function torectangle(width,long) //สูตรหาพื้นที่สี่เหลี่ยมผืนผ้า 
{
    return (width*long)
}



function display(elementId, result) //ฟังชั่นดิสเพลย์
{
    document.getElementById(elementId).innerHTML= result
}






