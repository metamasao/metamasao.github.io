import { Card } from "../../molecules/Card/Index";
import "./index.scss";

export interface ContentsGridProps {
  contents: JSX.Element[];
}

export interface MainSidebarGridProps {
  mainContents: JSX.Element,
  sidebarContents: any
}

export const ContentsGrid = (props: ContentsGridProps) => {
  const {contents} = props

  return (
    <div className="grid-layout">
      {contents.map((content, i) => (
        <div className="grid-content" key={i}>
          {content}
        </div>
      ))}
    </div>
  )
}

// export const MainSidebarGrid = (props: MainSidebarGridProps) => {
//   const {} = props

//   return (
//     <div className="main-sidebar-grid">
//       <div className="main">
//         {main}
//       </div>
//       <div className="grid-sidebar">
//         {gridSidebar}
//       </div>
//     </div>
//   )
// }