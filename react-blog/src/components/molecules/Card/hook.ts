import { useNavigate } from "react-router-dom";

export const useCardNavigate = (baseUrl: string) => {
  const navigate = useNavigate()
  const onClick = (filename: string) => {

    navigate(`${baseUrl}/${filename}`)
  }
  return onClick
}