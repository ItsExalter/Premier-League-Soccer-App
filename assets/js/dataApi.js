window.onload = () => {
  const itsstandings = document.querySelector("#standings");

  const standingsTable = (jsonResponse) => {
    const [total, ,] = jsonResponse.standings;
    itsstandings.innerHTML = "";
    let tableData = "";

    total.table.forEach((table) => {
      tableData += `
                <tr class="hide-on-med-and-down">
                  <td>${table.position}</td>
                  <td>${table.team.name}</td>
                  <td>${table.playedGames}</td>
                  <td>${table.won}</td>
                  <td>${table.draw}</td>
                  <td>${table.lost}</td>
                  <td>${table.goalsFor}</td>
                  <td>${table.goalsAgainst}</td>
                  <td>${table.goalDifference}</td>
                  <td>${table.points}</td>
                </tr>
                <tr class="hide-on-large-only">
                  <td>${table.position}</td>
                  <td>${table.team.name}</td>
                  <td>${table.playedGames}</td>
                  <td>${table.points}</td>
                </tr>
            `;
    });
    itsstandings.innerHTML = tableData;
  };

  fetch("https://api.football-data.org/v2/competitions/2021/standings", {
    headers: {
      "X-Auth-Token": "195513ca33a34f05b306c7376bcce326",
    },
  })
    .then((response) => response.json())
    .then(standingsTable);
};
