function addUser(){
    player1_name = document.getElementById("player1Name").value;
    player2_name = document.getElementById("player2Name").value;
    
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    
    window.Location = "game_page.html"
    }