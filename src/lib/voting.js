export async function submitVote(event, vote) {
  const url =
    'https://cors-anywhere.herokuapp.com/https://dramatic-sidewalk-3548.twil.io/vote-talk';
  const body = JSON.stringify({ vote, event });
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
  console.log(resp);
  localStorage.setItem('voted', 'true');
  return resp;
}
