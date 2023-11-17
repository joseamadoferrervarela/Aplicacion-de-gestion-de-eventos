import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

import { useFormik } from 'formik';
import  * as Yup from 'yup';

import {useSelector,useDispatch} from "react-redux";
import {createData} from "../reducers/data/dataSlice.tsx";
import {onModal1} from "../reducers/modal/modalSlice.tsx";



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2

};


export function Modal1() {
 
    const dispatch= useDispatch()
    const data = useSelector((state:any)=>state.data)
    const modal = useSelector((state:any)=>state.modal)
 
  type TypeInitialValues={
    nombre:string
    hora:string
    ubicacion:string
    descripcion:string
  }

  const initialValues: TypeInitialValues= {
    nombre:'',
    hora:'',
    ubicacion:'',
    descripcion:'',
  }

  
  const onSubmit =(values: TypeInitialValues)=>{
    dispatch(createData({id:data.length + 1, nombre: values.nombre, hora:values.hora, ubicacion: values.ubicacion, descripcion: values.  descripcion}));
    dispatch(onModal1({modal1:false,modal2:false}));
    (document.getElementById("myform") as HTMLFormElement).reset()
    values.nombre=''
    values.hora=''
    values.ubicacion=''
    values.descripcion=''
  }             

  const validationSchema = Yup.object({
    nombre:Yup.string().required('campo requerido'),
    hora:Yup.string().required('campo requerido'),
    ubicacion:Yup.string().required('campo requerido'),
    descripcion:Yup.string().min(10,'la descripcion debe ser minimo de 10 letras').max(50,'la descripcion debe ser de maximo 50 caracteres').required('campo requerido')
  })

  const {handleChange, handleSubmit, errors} = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  console.log(modal)
  return (
    <div>
      <Modal
        open={modal.modal1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{borderRadius: '10px'}}
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Crea un nuevo evento
        </Typography>
        <Typography id="modal-modal-description" variant='h5' sx={{ mt: 2 }}>
        Porfavor llena todos los campos para crear un evento
        </Typography>
        
        <form id='myform' onSubmit={handleSubmit}>
        <Grid container sx={{ mt: 1 }} >
        <Grid item md={12}>
        <FormControl fullWidth>
          <TextField  onChange={handleChange} fullWidth label="nombre" id='nombre' name='nombre' type='text' aria-describedby='name-helper' />
          <FormHelperText id='name-helper' >nombre del evento</FormHelperText>
          <p style={{height:'10px', color:'blue', fontSize:'12px'}}>{errors?.nombre}</p>
        </FormControl>
        </Grid>
        
        <Grid item md={12} sx={{ mt: 1 }}>
        <FormControl fullWidth>
          <TextField  onChange={handleChange} fullWidth  id='hora' name='hora' type='time' aria-describedby='hora-helper' />
          <FormHelperText id='hora-helper' >hora del evento</FormHelperText>
          <p style={{height:'10px', color:'blue', fontSize:'12px'}}>{errors?.hora}</p>
        </FormControl>
        </Grid>

        <Grid item md={12} sx={{ mt: 1 }}>
        <FormControl fullWidth>
          <TextField  onChange={handleChange} fullWidth label="ubicacion" id='ubicacion' name='ubicacion' type='text' aria-describedby='ubicacion-helper' />
          <FormHelperText id='ubicacion-helper' >ubicacion del evento</FormHelperText>
          <p style={{height:'10px', color:'blue', fontSize:'12px'}}>{errors?.ubicacion}</p>
        </FormControl>
        </Grid>

        <Grid item md={12} sx={{ mt: 1 }}>
        <FormControl fullWidth>
          <TextField  onChange={handleChange} fullWidth label="descripcion" id='descripcion' name='descripcion' type='text' aria-describedby='hora-helper' />
          <FormHelperText id='descripcion-helper' >descripcion del evento</FormHelperText>
          <p style={{height:'10px', color:'blue', fontSize:'12px'}}>{errors?.descripcion}</p>
        </FormControl>
        </Grid>
        </Grid>
        
        <div style={{display:'flex', flexDirection:'row-reverse'}}>
        <Stack direction="row" sx={{ mt: 1 }} spacing={2}>
        
             <Button 
        
             type='submit'  sx={{borderColor:'#ff00ff',color:'#ff00ff'}} variant="outlined" endIcon={<BookmarkAddIcon />}>
             Insertar 
             </Button>
        
             <Button onClick={()=>
                        dispatch(onModal1({
                         modal1:false,
                         modal2:false,
                         }))
        
             }  sx={{borderColor:'#ff00ff',color:'#ff00ff'}} variant="outlined" endIcon={<BookmarkRemoveIcon />}>
             Cerrar
             </Button>
        </Stack>
        </div>

        
        </form>
        </Box>
           
      </Modal>
       
    </div>
  );
}







