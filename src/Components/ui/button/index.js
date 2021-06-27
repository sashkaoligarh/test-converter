import Button from '@material-ui/core/Button'

export const PrimaryButton = ({text, onClick = () => {}}) => {
  return (
    <Button onClick={onClick} size="medium" variant="contained" color="primary">
      {text}
    </Button>
  )
}