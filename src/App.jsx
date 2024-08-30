import { useState } from 'react'
import './App.css'

function App() {
  const [votos, setVotos] = useState(0)
  const [votaciones, setVotaciones] = useState({
    kuoli: 0,
    mendezmolina: 0,
    cumsillediez: 0,
    millarmedel: 0
  })

  const KuoLi = 'Kuo-Li'
  const CumsilleDiez = 'Cumsille-Diez'
  const MillarMedel = 'Millar-Medel'
  const MendezMolina = 'Mendez-Molina'

  function vote() {
    event.preventDefault()

    let newObj = {...votaciones}

    newObj.kuoli = parseInt(newObj.kuoli) + parseInt(document.getElementById(KuoLi).value)
    newObj.mendezmolina = parseInt(newObj.mendezmolina) + parseInt(document.getElementById(MendezMolina).value)
    newObj.cumsillediez = parseInt(newObj.cumsillediez) + parseInt(document.getElementById(CumsilleDiez).value)
    newObj.millarmedel = parseInt(newObj.millarmedel) + parseInt(document.getElementById(MillarMedel).value)
    
    setVotaciones(newObj)
    setVotos(votos + 1)

    setTimeout(console.log(votaciones), 1000)
    setTimeout(console.log(votos), 1000)
  }   

  function winner() {
    event.preventDefault()

    let nombreValorMayor = ''
    let valorMayor = -Infinity

    for (const clave in votaciones) {
      if (votaciones[clave] === valorMayor) {
        nombreValorMayor = nombreValorMayor + ' y ' + clave
      }
      if (votaciones[clave] > valorMayor) {
        valorMayor = votaciones[clave]
        nombreValorMayor = clave
      }
    }
    console.log(nombreValorMayor)
    console.log(valorMayor);

    let element = document.getElementById('form__winner') 
    element.textContent = nombreValorMayor
  }

  return (
    <form id='vote__form' className='vote__form'>
      <label className='form__title'> Resultados Divina Comida</label>
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
      <button onClick={winner}>Revelar Ganador</button>
      <p>{`Votos escrutados: ${votos}`}</p>
      <p id='form__winner'></p>
    </form>
  )
}

export default App
