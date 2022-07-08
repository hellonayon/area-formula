function tosquare(squarevalue) //สูตรหาพื้นที่สี่เหลี่ยมจตุรัส
{
    let result = squarevalue * squarevalue
    return result.toFixed(2) + " CM";
}
function torectangle(rectanglevalue1,rectanglevalue2) //สูตรหาพื้นที่สี่เหลี่ยมผืนผ้า rectanglevalue1=ค่ากว้าง rectanglevalue2=ค่ายาว
{
    let result = rectanglevalue1 * rectanglevalue2
    return result.toFixed(2) + " CM";
}

function display(elementId, result) //ฟังชั่นดิสเพลย์
{
    document.getElementById(elementId).innerHTML= result
}

function tosquareProgram(result)
{
    alert(tosquare(result))
}
function torectangleProgram(result)
{
    alert(torectangle(result))
}
