import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';


export default function AddDialog({
  isOpenAddModal,
  handleToggleAddModal,
  handleSaveToy,
  handleChange
}) {
  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      component="form"
      noValidate
      autoComplete="off"
      open={isOpenAddModal}
      onClose={handleToggleAddModal}
    >
      <DialogTitle>Agregar Elemento</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          label='Nombre'
          type="text"
          name='name'
          variant="standard"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          label='Precio'
          type="text"
          name='price'
          variant="standard"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleToggleAddModal} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleSaveToy} variant="contained" disableElevation>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
