import AcUnitIcon from '@mui/icons-material/AcUnit';
import Card from '@mui/material/Card';
import { CardContent, Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function Choose() {

  return (
    <Grid container spacing={4} className=' bg-teal-400 bg-opacity-75'>
       <Grid item xs={6} sm={6} md={3} lg={3} className=''  >
       <Card  sx={{ boxShadow: 3,bgcolor:"transparent",padding:"10" }}>
      <div className='flex justify-between items-center px-4'>
        <div className='flex text-indigo-600 justify-center items-center w-20 bg-opacity-80 h-20 rounded-full bg-transparent shadow-lg'>
          <AcUnitIcon/>
        </div>
        <div className='text-indigo-600'>
          <AddCircleOutlineIcon/>
        </div>
      </div>
      <CardContent className='text-center f-bold'>
        Dental
      </CardContent>
     
     
    </Card>
       </Grid>
       <Grid item xs={6} sm={6} md={3} lg={3} className=''  >
       <Card  sx={{ boxShadow: 3,bgcolor:"transparent",padding:"10" }}>
      <div className='flex justify-between items-center px-4'>
        <div className='flex text-indigo-600 justify-center items-center w-20 bg-opacity-80 h-20 rounded-full bg-transparent shadow-lg'>
          <AcUnitIcon/>
        </div>
        <div className='text-indigo-600'>
          <AddCircleOutlineIcon/>
        </div>
      </div>
      <CardContent className='text-center f-bold'>
        Dental
      </CardContent>
     
     
    </Card>
       </Grid>
       <Grid item xs={6} sm={6} md={3} lg={3} className=''  >
       <Card  sx={{ boxShadow: 3,bgcolor:"transparent",padding:"10" }}>
      <div className='flex justify-between items-center px-4'>
        <div className='flex text-indigo-600 justify-center items-center w-20 bg-opacity-80 h-20 rounded-full bg-transparent shadow-lg'>
          <AcUnitIcon/>
        </div>
        <div className='text-indigo-600'>
          <AddCircleOutlineIcon/>
        </div>
      </div>
      <CardContent className='text-center f-bold'>
        Dental
      </CardContent>
     
     
    </Card>
       </Grid>
       <Grid item xs={6} sm={6} md={3} lg={3} className=''  >
       <Card  sx={{ boxShadow: 3,bgcolor:"transparent",padding:"10" }}>
      <div className='flex justify-between items-center px-4'>
        <div className='flex text-indigo-600 justify-center items-center w-20 bg-opacity-80 h-20 rounded-full bg-transparent shadow-lg'>
          <AcUnitIcon/>
        </div>
        <div className='text-indigo-600'>
          <AddCircleOutlineIcon/>
        </div>
      </div>
      <CardContent className='text-center f-bold'>
        Dental
      </CardContent>
     
     
    </Card>
       </Grid>
    </Grid>
  );
}