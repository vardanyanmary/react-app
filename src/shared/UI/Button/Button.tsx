import "./Button.scss";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' >{
  children: React.ReactNode;
  type ?: 'primary' | 'secondary'; // ete menak es grenq ira typery korum en u mnum en es erkusy 
  htmlType ?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'] // senc enq grum , vor mer buttoni typery chkorcnenq 
}

const Button = (props:ButtonProps) => {
    
  const {
    type, 
    htmlType,
    children, 
    ...rest } = props;


  return ( 
    <span>
      <button 
        className={`Button ${type}`} 
        type={htmlType} 
        {...rest}
      >
        {children}
      </button>
    </span>
  );
};


export default Button;
