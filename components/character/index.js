import styles from './styles.module.css'

function Character(props) {
    return (
        <div className={styles.container}>
            <div>
                <img
                    src={props.image}
                    height={300}
                    width={300}
                    className={styles.img}
                />
            </div>
            <div className={styles.info}>
                <span>{props.name}</span>
                <div className={styles.status}>
                    <div className={`${styles.circle} ${props.status == "Alive" ? "": styles.dead}`}></div>
                    <p>{props.status} - {props.species}</p>
                </div>
                <span>Last know location:</span>
                <p>{props.location.name}</p>
                <span>First seen in:</span>
                <p>{props.location.name}</p>
            </div>
        </div>
    )
}

export default Character