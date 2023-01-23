import axios from "axios";

export const getCurrency = (currency) => {
  const options = {
    method: "GET",
    url: `https://exchangerate-api.p.rapidapi.com/rapid/latest/${currency}`,
    headers: {
      "X-RapidAPI-Key": "f5b8bf79e4msh25787ede94720aep17173ejsne2e841f052f2",
      "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      const { COP, USD, CLP } = response.data.rates;
      console.log(response.data.rates);
      return { COP, USD, CLP };
    })
    .catch(function (error) {
      return error;
    });
};
