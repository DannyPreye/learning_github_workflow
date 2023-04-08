import React from "react";

const Button = ({ count, setCount }) => {
    return (
        <button
            data-testId="button"
            onClick={() => setCount((count) => count + 1)}
        >
            count is {count}
        </button>
    );
};

export default Button;
