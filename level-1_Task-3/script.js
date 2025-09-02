function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");
  
    if (temp === "") {
      result.innerHTML = "⚠️ Please enter a number.";
      return;
    }
  
    temp = parseFloat(temp);
    let converted = "";
  
    if (unit === "C") {
      let f = (temp * 9/5) + 32;
      let k = temp + 273.15;
      converted = `${temp} °C = ${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    } 
    else if (unit === "F") {
      let c = (temp - 32) * 5/9;
      let k = (temp - 32) * 5/9 + 273.15;
      converted = `${temp} °F = ${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    } 
    else if (unit === "K") {
      let c = temp - 273.15;
      let f = (temp - 273.15) * 9/5 + 32;
      converted = `${temp} K = ${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }
  
    result.innerHTML = converted;
  }
  