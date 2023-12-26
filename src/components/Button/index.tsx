export interface ButtonProps {
    name: string;
    buttonOnclick: () => void; // Assuming it's a function that returns nothing
  }

const Button = ({name, buttonOnclick}: ButtonProps) => {
    return (
        <button
        type='button'
        onClick={buttonOnclick}
        >{name}</button>
    )
}

export default Button;