import PropTypes from "prop-types";

function Button({ text }) {
    return (
        <button
            style={{
                backgroundColor: "tomato",
                color: "white",
            }}
        >
            {text}
        </button>
    );
}

Button.protoTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;