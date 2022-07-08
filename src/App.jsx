import './App.scss';
import WidgetUnidad from './components/WidgetUnidad';
import { Longitud } from './components/Longitud';
import { Masa } from './components/Masa';
import { useEffect, useState } from 'react';
import { FiRepeat } from 'react-icons/fi';

function App() {

  const [fromSelected, setFromSelected] = useState();
  const [toSelected, setToSelected] = useState();
  const [fromSelectedInput, setFromSelectedInput] = useState(0);
  const [toSelectedInput, setToSelectedInput] = useState(0);
  const [isFrom, setIsFrom] = useState(true);
  const [isTo, setIsTo] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("Longitud");
  const [actualUnit, setActualUnit] = useState(selectedUnit === "Longitud" ? Longitud : selectedUnit === "Masa" ? Masa : null)
  const unidades = ["Longitud", "Masa"]


  useEffect(() => {
    setFromSelected(actualUnit[0].nombre)
    setToSelected(actualUnit[1].nombre)
    
  }, [])

  const handleChangeFrom = (e) => {
    setFromSelected(e.target.value);
  }
  const handleChangeTo = (e) => {
    setToSelected(e.target.value);
  }
  const handleChangeFromInput = (e) => {
    setIsFrom(true);
    setIsTo(false);
    if (isNaN(e.target.value)) {
      return
    } else {
      setFromSelectedInput(e.target.value);
    }

  }
  const handleChangeToInput = (e) => {
    setIsFrom(false);
    setIsTo(true);
    if (isNaN(e.target.value)) {
      return
    } else {
      setToSelectedInput(e.target.value)
    }


  }
  const unitSelector = (e) => {
    setSelectedUnit(e.target.value)
  }

  useEffect(() => {
    if (fromSelected) {
      var objSelected = actualUnit.find(element => element.nombre === fromSelected)
      var factorConversion = objSelected.factores[toSelected];
      if (isFrom) {
        setToSelectedInput((fromSelectedInput * factorConversion))
      } else if (isTo) {
        setFromSelectedInput((toSelectedInput / factorConversion))

      }
    }
  }, [fromSelected, toSelected, fromSelectedInput, toSelectedInput,])

  useEffect(() =>{
    if(selectedUnit === "Longitud"){
      setActualUnit(Longitud)
    }else if(selectedUnit === "Masa"){
      setActualUnit(Masa)
    }
  }, [selectedUnit])

useEffect(() => {
  setFromSelected(actualUnit[0].nombre)
  setToSelected(actualUnit[1].nombre)
}, [actualUnit])


  return (

    <div className="App">
          <h1>Conversor de {selectedUnit}</h1>

      {selectedUnit === "Longitud" ?
        <div className="contenedor">
          <select name="" id="" onChange={unitSelector} value={selectedUnit}>
            {unidades.map(elemento => <option key={elemento} value={elemento}>{elemento}</option>)}
          </select>
          <div className="contenedorWidgets">

            <WidgetUnidad
              data={Longitud}
              selected={fromSelected}
              onChangeSelect={handleChangeFrom}
              onChangeInput={handleChangeFromInput}
              value={fromSelectedInput}
            />
            <FiRepeat size={'2rem'} />
            <WidgetUnidad
              data={Longitud}
              selected={toSelected}
              onChangeSelect={handleChangeTo}
              onChangeInput={handleChangeToInput}
              value={toSelectedInput}
            />
          </div>
        </div>
        : null}

      {selectedUnit === "Masa" ?
        <div className="contenedor">
          <select name="" id="" onChange={unitSelector} value={selectedUnit}>
            {unidades.map(elemento => <option key={elemento} value={elemento}>{elemento}</option>)}
          </select>
          <div className="contenedorWidgets">

            <WidgetUnidad
              data={Masa}
              selected={fromSelected}
              onChangeSelect={handleChangeFrom}
              onChangeInput={handleChangeFromInput}
              value={fromSelectedInput}
            />
            <FiRepeat size={'2rem'} />
            <WidgetUnidad
              data={Masa}
              selected={toSelected}
              onChangeSelect={handleChangeTo}
              onChangeInput={handleChangeToInput}
              value={toSelectedInput}
            />
          </div>
        </div>
        : null}

    </div>
  );


}

export default App;
