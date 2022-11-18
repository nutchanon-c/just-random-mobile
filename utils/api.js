export default function (type, body) {
  const url = "https://just-random-server.vercel.app/random";
  // const url = "http://127.0.0.1:3000/random";

  if (body) {
    // console.log("a");
    return fetch(`${url}/${type}`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        // console.log(text);
        let json = JSON.parse(text);
        // console.log(json);
        return json;
      });
  }
  return fetch(`${url}/${type}`, { mode: "cors" })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      // console.log(text);
      let json = JSON.parse(text);
      console.log(json);
      return json;
    });
}
