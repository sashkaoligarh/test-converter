import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors:{
		"0": "#f00",
    "0.5": "#0f0",
    "1.0": "#00f",
  }
})

export const TopLoader = () => {
  return(
    <TopBarProgress />
  )
}
