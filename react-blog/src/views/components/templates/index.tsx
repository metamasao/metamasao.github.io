// components
import { Navigation} from '../organims/Navigation'
import { Footer } from '../organims/Footer'

import "./index.scss"

export interface TemplateProps {
  title: string
  children: React.ReactNode
}

export const Template = (props: TemplateProps) => {
  const {title, children} = props

  return (
    <div className="template">
      <div className="template__navigation">
        <Navigation title={title} navItems={["about"]}/>
      </div>
      <div className="template__container">
        {children}
      </div>
      <div className="template__footer">
        <Footer />
      </div>
    </div>
  )
}