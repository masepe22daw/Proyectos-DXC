import { useState } from "react";
import "./Card.css";

const Card = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="card">
            <div className="card-header">
                <p>{title}</p>
                <button className="toggle-button" onClick={toggleCard}>
                    {isOpen ? "" : ""}
                </button>
            </div>
            {isOpen && <div className="card-content">{children}</div>}
        </div>
    );
};

export default Card;
