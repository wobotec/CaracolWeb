export default function DocumentsGallery() {
  return (
    <div className="mt-4">
      <h5>Galeria de Documentos</h5>

      <div className="row">
        {["Histórico.pdf", "Declaração.pdf"].map((doc, i) => (
          <div key={i} className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <p className="card-text">{doc}</p>
                <button className="btn btn-outline-primary btn-sm">
                  Visualizar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}