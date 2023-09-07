const scoreMainContainer = document.getElementById("scoreMainContainer")
const AddDetailsButton = document.getElementById("AddDetailsButton");
const value = document.querySelector('.hello');
console.log(AddDetailsButton);

AddDetailsButton.addEventListener("click",()=>{
    const fName = document.getElementById("fName")
    const lName = document.getElementById("lName")
    const country = document.getElementById("country")
    const score = document.getElementById("score")

    const scoreBoard = document.createElement("div")
    scoreBoard.classList.add("scoreBoard")

    scoreBoard.innerHTML = `
            <p class="playerName">${fName.value} ${lName.value}</p>
            <p class="country">${country.value}</p>
            <p class="score">${score.value}</p>
            <p class="deleteIcon">&#x1f5d1</p>
    `;
    scoreMainContainer.appendChild(scoreBoard);
    lName.value = ""; 
    fName.value = "";
    country.value = "";
    score.value = "";
    console.log(fName,lName,country,score,scoreBoard);    
    sortScoreBoard();
    deleteRank();
})

function sortScoreBoard(){
    const scoreBoard = document.querySelectorAll(".scoreBoard")
    const arr = []
    scoreBoard.forEach((ele)=>{arr.push(ele)})
    // console.log(arr);
    const sortedArray = arr.sort((a,b)=>{
        let runOfManOne = parseInt(a.children[2].textContent)
        let runOfManTwo = parseInt(b.children[2].textContent)
        return runOfManTwo-runOfManOne;
    })
    console.log(sortedArray);
    sortedArray.forEach((ele)=>{
        scoreMainContainer.appendChild(ele);
    })
}

function deleteRank(){
    const deleteIcon = document.querySelectorAll(".deleteIcon")
    // console.log(deleteIcon);
    deleteIcon.forEach((ele)=>{
        ele.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
        })
    })
}
