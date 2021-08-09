function getURI(mode) {
  return `${process.env.REACT_APP_API_URL}${mode}
    ?access_key=${process.env.REACT_APP_ACCESS_KEY}
    &symbols=USD,AUD,CAD,PLN,MXN&format=1`;
}

async function fetchData(mode) {
  try {
    const fetchURI = getURI(mode);
    let response = await fetch(fetchURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    if (response.ok) {
      return response.data;
    }

    throw new Error(response.error.message);
  } catch (err) {
    throw new Error(err.message);
  }
}

export default fetchData;
