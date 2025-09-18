let scores = {
    team1: 0,
    team2: 0
  };
  
  function addPoints(team, points) {
    scores[team] += points;
    document.getElementById(`${team}-score`).textContent = scores[team];
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addPoints, scores };
  }

/*teste de comentario*/
