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
    const value1 = document.getElementById("inputValuerectangle1").value
    const value2 = document.getElementById("inputValuerectangle2").value

    console.log('value1 is ${value1}')
    console.log('value2 is ${value2}')
    
    const result = torectangleProgram(value1,value2)
    alert(result)
}

function torectangleProgram(width,long){
    return width*long + " ซม.";
    
}

function totriangle() //สูตรหาพื้นที่สามเหลี่ยม 
{
    const value1 = document.getElementById("inputValuetriangle1").value
    const value2 = document.getElementById("inputValuetriangle2").value

    console.log('value1 is ${value1}')
    console.log('value2 is ${value2}')
    
    const result = totriangleProgram(value1,value2)
    alert(result)
}

function totriangleProgram(base,height){
    return 0.5*base*height + " ซม.";
    
}

function toparallelogram() //สูตรหาพื้นที่สี่เหลี่ยมด้านขนาน 
{
    const value1 = document.getElementById("inputValueparallelogram1").value
    const value2 = document.getElementById("inputValueparallelogram2").value

    console.log('value1 is ${value1}')
    console.log('value2 is ${value2}')
    
    const result = toparallelogramProgram(value1,value2)
    alert(result)
}

function toparallelogramProgram(base,height){
    return base*height + " ซม.";
    
}

function tocircle() //สูตรหาพื้นที่วงกลม
{
    const value1 = document.getElementById("inputValuecircle").value
    console.log('value1 is ${value1}')
    
    const result = tocircleProgram(value1)
    alert(result)
}

function tocircleProgram(radius){
    return 3.14*(radius*radius) + " ซม.";
    
}

function display(elementId, result) //ฟังชั่นดิสเพลย์
{
    document.getElementById(elementId).innerHTML= result
}






