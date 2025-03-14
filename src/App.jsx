import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import NavbarComponent from './component/NavbarComponent'
import ModalComponent from './component/ModalComponent'
import TableComponent from './component/TableComponent'
import FormComponents from './component/FormComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='w-100 mb-5 pb-5'>
      {/* <p>Jumlah: {count}</p>
      <Button onClick={function() {setCount(count + 1)}}>Tambah</Button> */}

      <NavbarComponent/>

      <section className='container'>
        <h1>HALO 1</h1>
        <h1>HALO 2</h1>
        <h1>HALO 3</h1>
        <h1>HALO 4</h1>
        <h1>HALO 5</h1>
        <h1>HALO 6</h1>
        <h1>HALO 7</h1>
        <h1>HALO 8</h1>
        <h1>HALO 9</h1>

        <div className="my-4">
        <ModalComponent/>
        </div>

        <div className='my-4'>
        <TableComponent/>
        </div>

        <div className='my-4'>
        <FormComponents/>
        </div>
      </section>
    </section>
  )
}

export default App
