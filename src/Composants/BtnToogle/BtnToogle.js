import React, {useContext} from 'react'
import './BtnToogle.css'
import {ThemeContext} from '../../Context/ThemeContext'

export default function BtnToogle() {

    const {toogleTheme, theme} =useContext(ThemeContext)
  return (
    <div
        onClick={toogleTheme}
        // rendu conditionnel {} pour classe
        className={ theme ? 'btn-toogle goLight' : 'btn-toogle goDark'}
        >
            {theme ? "Dark" : "Light"}
    </div>
  )
}
