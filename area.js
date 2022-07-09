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
    const value1 = document.getElementById("inputrectangle1").value
    const value2 = document.getElementById("inputrectangle2").value

    console.log('value1 is ${value1}')
    console.log('value1 is ${value1}')
    
    const result = torectangleProgram(value1,value2)
    alert(result)
}

function torectangleProgram(width,long){
    return (width*long)
    
}



function display(elementId, result) //ฟังชั่นดิสเพลย์
{
    document.getElementById(elementId).innerHTML= result
}






