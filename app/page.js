import Tabla from "@/components/Tabla/Tabla";

export default function Home() {
  return (
    <main style={{marginTop: 25}}>
      <div className="container">
        <div className="row">
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
