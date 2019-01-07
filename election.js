document.addEventListener("DOMContentLoaded", function() {

  const electionResults = document.querySelector('#electionResults');

  const resultsRequest = axios({
    method: 'GET',
    url: 'https://bb-election-api.herokuapp.com/',
    responseType: 'text'
  }).then( (response) => {
    response.data.candidates.forEach((candidate) => {
      const candidateResult = document.createElement('li');
      candidateResult.innerHTML = (`${candidate.name}: ${candidate.votes} votes`);
      electionResults.appendChild(candidateResult);
    });
  });

});
