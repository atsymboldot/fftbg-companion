import { BASE_MUSTADIO_URL } from "../constants";
import { OverlayContext } from "../contexts/OverlayContext";
import { useContext } from "react";

type AllowButtonProps = {
  warning?: boolean
}

export const AllowButton = (props: AllowButtonProps) => {
  const { allowOverlay, setAllowOverlay } = useContext(OverlayContext);

  return (
    <button
      className='absolute inset-y-0 right-6 w-12 h-12 bg-unit-panel border-unit-panel border-2 shadow-unit-panel'
      style={{ top: '60%'}}
      onClick={() => {
        setAllowOverlay(!allowOverlay);
      }}>
        <img className='p-1 mx-auto' 
          src={BASE_MUSTADIO_URL + (allowOverlay ? (props.warning ? 'items/Scorpion Tail.png' : 'items/Flail.png')  : 'items/Flame Whip.png')} />
    </button>
  )
}