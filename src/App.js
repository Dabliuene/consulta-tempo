import { useState } from "react";

function App() {
  const [city, setCity] = useState("Mossoro");
  const [tempo, setTempo] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=f2d7c33327c541eeaa124551230402&q=${city}&lang=pt`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setTempo(data);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#top">
          Previsão do tempo
        </a>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>Consulte a previsão do tempo</h1>
          <p className="lead">
            Digite o nome da cidade que deseja consultar e clique em pesquisar
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                className="form-control"
                value={city}
                onChange={handleChange}
              />
            </div>
          </div>
          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Consultar
          </button>

          {tempo ? (
            <div>
              <div className="mt-4 d-flex align-items-center">
                <div>
                  <img src={tempo.current.condition.icon} alt="" />
                </div>
                <div>
                  <h3>Hoje o dia está: {tempo.current.condition.text}</h3>
                  <p className="lead">Temp: {tempo.current.temp_c}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;
