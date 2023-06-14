import { RingLoader } from "react-spinners";

export default function Loader() {
  return (
    <RingLoader cssOverride={{margin: "15px auto"}} size={150}/>
  )
}