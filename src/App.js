import { Button, createMuiTheme, TextField, ThemeProvider } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import React from 'react'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },

  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true
    }
  }
})


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TextField id="standard-basic" label="Standard" />
        <Button variant="contained" color="primary">
          Primary
      </Button>
      </div>
    </ThemeProvider >
  )
}
