interface ButtonProps{
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}




const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  )
}

export default Button
