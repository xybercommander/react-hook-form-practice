interface Props {
  text: string;
  handleOnClick: () => void;
}

const Alert = ({ text, handleOnClick }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      <strong>Hello {text}!!</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={handleOnClick}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
