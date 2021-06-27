import NumberFormat from 'react-number-format';

export const CustomNumberInput = ({ onChange, pref, inputRef}) => {
  return(
    <NumberFormat
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  )
}