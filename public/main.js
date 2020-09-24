function main() {
  let team1Score  = 0
  let team2Score = 0

  function increaseTeam1score (){
    team1Score = team1Score + 1
    console.log(team1Score)
    console.log('i clicked it')
    const teamOneDisplay = document.querySelector('.team1 h3')
    teamOneDisplay.textContent = team1Score
  }
  const teamOneAdd = document.querySelector(".team1 .add")
  console.log(teamOneAdd)
  teamOneAdd.addEventListener('click',increaseTeam1score )

  function decreaseTeam1score(){
    team1Score = team1Score - 1 
    const team1Display = document.querySelector('.team1 h3')
    team1Display.textContent = team1Score  

  }
  const team1sub = document.querySelector('.team1 .subtract')
  team1sub.addEventListener('click', decreaseTeam1score)
   
     const teamOneNameElement = document.querySelector('.team1 h2')
     console.log(teamOneNameElement)
     function handleChangeTeamOneName(event) {     const elementThatChanged = event.target
     const inputFieldValue = elementThatChanged.value
     teamOneNameElement.textContent = inputFieldValue     }
     const teamOneInput = document.querySelector('.team1 input')    
     teamOneInput.addEventListener('input', handleChangeTeamOneName)

  

  function increaseTeam2score (){
    team2Score = team2Score + 1
    console.log(team2Score)
    console.log('i clicked it')
    const teamTwoDisplay = document.querySelector('.team2 h3')
    teamTwoDisplay.textContent = team2Score
  }
  const teamTwoAdd = document.querySelector(".team2 .add")
  console.log(teamTwoAdd)
  teamTwoAdd.addEventListener('click',increaseTeam2score )

  function decreaseTeam2score(){
    team2Score = team2Score - 1 
    const team2Display = document.querySelector('.team2 h3')
    team2Display.textContent = team1Score

  }
  const team2sub = document.querySelector('.team2 .subtract')
  team2sub.addEventListener('click', decreaseTeam2score)
  
  const teamTwoNameElement = document.querySelector('.team2 h2')
     console.log(teamTwoNameElement)
     function handleChangeTeamTwoName(event) {     const elementThatChanged2 = event.target
     const inputFieldValue2 = elementThatChanged2.value
     teamTwoNameElement.textContent = inputFieldValue2     }
     const teamTwoInput = document.querySelector('.team2 input')    
     teamTwoInput.addEventListener('input', handleChangeTeamTwoName)
  



}

document.addEventListener('DOMContentLoaded', main)
