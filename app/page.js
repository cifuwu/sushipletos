import Tabla from "@/components/Tabla/Tabla";

export default function Home() {
  return (
    <main style={{marginTop: 45}}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>
              Registro de préstamos 
            </h3>
          </div>
        </div>

        <div className="row" style={{marginTop: 20}}>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <Tabla />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
