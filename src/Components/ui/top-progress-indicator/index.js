import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors:{
		"0": "blue",
    "1.0": "green",
  }
})

export const TopLoader = () => {
  return(
    <TopBarProgress />
  )
}
