import { useState } from 'react'
import './App.css'

function App() {
  const [votos, setVotos] = useState(0)

  const KuoLi = 'Kuo-li'
  const CumsilleDiez = 'Cumsille-Diez'
  const MillarMedel = 'Millar-Medel'
  const MendezMolina = 'Mendez-Molina'

  let votaciones = {
    kuoli: 0,
    mendezmolina: 0,
    cumsillediez: 0,
    millarmedel: 0
  }

  function vote() {
    votaciones.kuoli += parseInt(document.getElementById(KuoLi).value)
    votaciones.cumsillediez += parseInt(document.getElementById(CumsilleDiez).value)
    votaciones.millarmedel += parseInt(document.getElementById(MillarMedel).value)
    votaciones.mendezmolina += parseInt(document.getElementById(MendezMolina).value)    
    setVotos(votos + 1)
    console.log(votaciones)
    console.log(votos);
    event.preventDefault()
  }

  return (
    <form id='vote__form'>
      <div className='wrapper'>
        <label>{`Familia ${KuoLi}`}</label>
        <input type="number" name={KuoLi} id={KuoLi} />
      </div>
      <div className='wrapper'>
        <label>{`Familia ${MendezMolina}`}</label>
        <input type="number" name={MendezMolina} id={MendezMolina} />
      </div>
      <div className='wrapper'>
        <label>{`Familia ${CumsilleDiez}`}</label>
        <input type="number" name={CumsilleDiez} id={CumsilleDiez} />
      </div>
      <div className='wrapper'>
        <label>{`Familia ${MillarMedel}`}</label>
        <input type="number" name={MillarMedel} id={MillarMedel} />
      </div>
      <button onClick={vote}>VOTAR!</button>
      <button>Reset</button>
      <p>{`Votos escrutados: ${votos}`}</p>
    </form>
  )
}

export default App
