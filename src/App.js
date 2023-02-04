
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#top">
          Previsão do tempo
        </a>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>
            Consulte a previsão do tempo
          </h1> 
          <p className="lead">
            Digite o nome da cidade que deseja consultar e clique em pesquisar
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <input className="form-control" />
            </div>
          </div>

          <button className="btn btn-primary btn-lg">
            Consultar
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
