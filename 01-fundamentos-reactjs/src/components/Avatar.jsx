import styles from './Avatar.module.css'

/* destructor:

const user = { name: "Camila" } 
const { name } = user; 

*/

export function Avatar({ hasBorder = true, src }) {

    //const hasBorder = props.hasBorder != false;

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
        />
    )
}