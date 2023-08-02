import "./ButtonComponent.css";

interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): React.ReactElement => {
  return (
    <button className="button-card button-reset" onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
