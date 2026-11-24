import { Button as KendoButton } from '@progress/kendo-react-buttons'
import '@progress/kendo-theme-default/dist/all.css'

function Button({ children, type = 'button', ...props }) {
  return (
    <KendoButton type={type} {...props}>
      {children}
    </KendoButton>
  )
}

export default Button