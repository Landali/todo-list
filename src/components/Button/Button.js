import styles from './styles.module.css'

export const Button = ({ onClick, classname, text }) => {
    return (<button onClick={onClick} className={styles[classname]}>{text}</button>)
}