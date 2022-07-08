import React from 'react'

const WidgetUnidad = ({ data, selected, onChangeSelect, onChangeInput, value }) => {
    return (
        <div className="WidgetUnidad">
                <input type="text" placeholder='0' onChange={onChangeInput} value={value === 0 ? '' : value}/>
            <select value = {selected} onChange={onChangeSelect}>
                {
                    data.map(element => {
                        return (
                            <option  key={element.nombre}>{element.nombre}</option>
                            )
                        }
                    )
                }
            </select>
        </div>
    )
}

export default WidgetUnidad