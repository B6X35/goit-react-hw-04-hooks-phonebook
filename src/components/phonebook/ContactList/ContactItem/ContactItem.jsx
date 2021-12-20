import PropTypes from "prop-types";
import { memo } from "react";
import style from "./ContactItem.module.css"

const ContactItem = ({ name, number, delet }) => {
    return (
        <li className={style.li}>
            <p>{name}: {number}</p>
            <button className={style.btn} onClick={delet}>delete</button>
        </li>
    )
}

export default memo(ContactItem);

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    delet: PropTypes.func.isRequired
} 