import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

function Tempapp() {
  const [search, setsearch] = useState("Mumbai");
  const [city, setcity] = useState(null);
  const [weather, setweather] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=33df27d885e21deac4494a5a43b5437f`;
      const response = await fetch(url);
      const resjson = await response.json();
      setweather(resjson);
      console.log(resjson.main);
      //  console.log(resjson.weather[0]);
      setcity(resjson);
      // setweather(resjson.weather[0]);
      console.log(weather);
    };

    fetchApi();

    // console.log(weather);
  }, [search]);

  return (
    <>
    <div className="container">
  
    <div className="main-box">
    <div className="outwave">
      <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
            </div>
            <div className="row">
        <div className="col-md-10 col-lg-10 col-10">
      <div className="box">
        <div className="inputdata">
          <input
            type="search"
            className="inputfield"
            value={search}
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
        {console.log(city)}
        {city === null || city === undefined ? (
          <p className="notfound">City not found</p>
        ) : (
          <>
            {city.main !== undefined ? (
              <>
                <div className="weather-logo">
                  {city.weather[0].main === "Sunny" ? (
                    <div className="logo clft">
                      <i className="fas fa-sun fa-5x sun" />
                    </div>
                  ) : null}

                  {city.weather[0].main === "Haze" ? (
                    <div className="logo clft ">
                      <i className="fas fa-smog fa-5x cloud" />
                    </div>
                  ) : null}

                  {city.weather[0].main === "Clear" ? (
                    <div className="logo clft">
                      {/* <i  className="fas fa-thumbs-up fa-5x cloud" /> */}
                      <i className="fas fa-sun fa-5x sun" />
                    </div>
                  ) : null}
                  {city.weather[0].main === "Rain" ? (
                    <div className="logo clft">
                      <i class="fas fa-cloud-rain fa-4x cloud"></i>
                      <i class="fas fa-cloud-rain fa-5x cloud"></i>
                      <i class="fas fa-cloud-rain fa-4x cloud"></i>
                    </div>
                  ) : null}
                  {city.weather[0].main === "Clouds" ? (
                    <div className="logo clft">
                      <i class="fas fa-cloud fa-4x cloud "></i>
                      <i class="fas fa-cloud fa-5x cloud"></i>
                      <i class="fas fa-cloud fa-4x cloud cryt"></i>
                    </div>
                  ) : null}
              
                </div>
              </>
            ) : null}

            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              {city.main !== undefined ? (
                <>
                  <h1 className="temp">
                    {city.main !== undefined ? (
                      <h1>{city.main.temp} degree Cel</h1>
                    ) : null}{" "}
                  </h1>
                  <h6 className="tempmin_max text-center">
                    Min : {city.main.temp_min} degree Cel</h6>
                    <h6 className="tempmin_max text-center"> 
                       Max :{city.main.temp_max} degree Cel
                  </h6>
                </>
              ) : (
                <h1>Place not found</h1>
              )}
            </div>

            <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
          </>
        )}
      </div>
      </div></div>
      </div></div>
    </>
  );
}

export default Tempapp;
