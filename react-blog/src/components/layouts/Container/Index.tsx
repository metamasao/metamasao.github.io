import "./index.scss";

export interface ContainerProps {
  children: JSX.Element
}

export const Container = (props: ContainerProps) => {
  const {children} = props

  return (
    <div className="container">
      {children}
    </div>
  )
}