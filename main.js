console.log("HI");
const locations = [
    {
        name: "Bermuda",
        image: "https://lh3.googleusercontent.com/-9HZspn_EOGY/Wb0XQnhBtmI/AAAAAAABB6Q/vTz291aKp-4Tij5TJ_6pjkWhYL2JQsx2QCLIBGAYYCw/w336-h190-n-k-no/",
        input: ""
    },
    {
        name: "Japan",
        image: "https://lh4.googleusercontent.com/proxy/vf4KfA2XM3e9PvHFpuH93IEsNUyILi4oT4-xT8RBIlL9h9r41QYmYvAUEBPqU9158qHlYbzsMj0zojDuvJH1selIpWf0oiey7TW5oycz15OxCtdcX24WR_NxMQi4A8GpU7yj957Dr2lVAqPpO97FgEsrpYRLAio=w336-h190-n-k-no",
        input: ""
    }



]


const printToDom = (strang, divID) => {
   const printTo = document.getElementById(divID);
   printTo.innerHTML = strang;
}

const buildDomString = (locationArray) => {
    let domString = "";
    locationArray.forEach((location)=>{
        domString += `<div class="card">`;
        domString += `<h1>${location.name}</h1>`;
        domString += `<img src="${location.image}" alt="">`;
        domString += `<input class="input-field" type="text">`;
        domString += `<br>`;
        domString += `<button class="card-button">Submit</button>`;
        domString += `</div>`;

    })
    printToDom(domString, "card-container");

}

buildDomString(locations);


const allThaButtons = document.getElementsByClassName("card-button");

for (let i = 0; i < allThaButtons.length; i++) {
    allThaButtons[i].addEventListener("click", (event) => {
        let textValue = "";
        const test = event.target.parentNode.children[2].value;
        console.log(test);
    });

}


// const captureField = (event) => {
//     let textValue = "";   
//     textValue = event.target.getElementsByClassName("card").parentNode.children[0].children[0].children[0];
//     console.log(textValue);

// }