const data = {
  coord: { lon: 153.0281, lat: -27.4679 },
  weather: [
    { id: 802, main: "Clouds", description: "scattered clouds", icon: "03n" },
  ],
  base: "stations",
  main: {
    temp: 298.23,
    feels_like: 298.67,
    temp_min: 297.45,
    temp_max: 298.81,
    pressure: 1012,
    humidity: 72,
  },
  visibility: 10000,
  wind: { speed: 1.34, deg: 4, gust: 4.92 },
  clouds: { all: 48 },
  dt: 1635414194,
  sys: {
    type: 2,
    id: 2005393,
    country: "AU",
    sunrise: 1635361203,
    sunset: 1635408187,
  },
  timezone: 36000,
  id: 2174003,
  name: "Brisbane",
  cod: 200,
};

const createCardHtml = (city, emoji, temp, description) => `
  <div class="card">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center">                
        ${emoji}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
            <h4>${city}</h4>
            <h6>${temp}c</h6>
          </div>
          <div class="row">
            <h5 class="card-subtitle text-muted">${description}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// select the button
// select the input
// use the input to pass the city value into the html
// render the new html when we click the button
