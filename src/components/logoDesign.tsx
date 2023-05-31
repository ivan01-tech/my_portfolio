import React from 'react'
import styles from "../styles/logo.module.css"

type Props = {hideClass?:string}

function LogoDesign({hideClass}: Props) {
  return (
    <div className={`${styles.logo_wrap} ${hideClass}`}>Ivan01-tech</div>
  )
}

export default LogoDesign