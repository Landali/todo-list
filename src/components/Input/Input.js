import styles from './styles.module.css'

export const Input = ({ onChange, classname, type, placeholder, name, value }) => {
    return (<input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        className={styles[classname]}
        onChange={onChange}
    ></input>)
}