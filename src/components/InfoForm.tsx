import { useForm } from 'react-hook-form';
import { useDispatch, useStore } from 'react-redux';

import Input from './Input';
import { chooseMake, chooseModel, chooseYear, chooseColor, chooseVin } from '../redux/slices/RootSlice';
import { server_calls } from '../api/server';

interface InfoFormProps {
    id?: string[]
}

const InfoForm = ( props: InfoFormProps ) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data);
        console.log(`Updated: ${ data.make } ${ props.id }`);
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset();
    } else {
        dispatch(chooseMake(data.make));
        dispatch(chooseModel(data.model));
        dispatch(chooseYear(data.year));
        dispatch(chooseColor(data.color));
        dispatch(chooseVin(data.vin));

        server_calls.create(store.getState());
        setTimeout(() => {window.location.reload()}, 1000);
    }
  }

  return (

    // TODO: add Handle function
    <div className='h-3/5 pr-5 pl-5 m-5 overflow-y-scroll'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
           <label htmlFor="make">Make</label>
           <Input {...register('make')} name='make' placeholder='Make'/>
        </div>
        <div>
           <label htmlFor="model">Model</label>
           <Input {...register('model')} name='model' placeholder='Model'/>
        </div>
        <div>
           <label htmlFor="year">Year</label>
           <Input {...register('year')} name='year' placeholder='Year'/>
        </div>
        <div>
           <label htmlFor="color">Color</label>
           <Input {...register('color')} name='color' placeholder='Color'/>
        </div>
        <div>
           <label htmlFor="vin">Vin</label>
           <Input {...register('vin')} name='vin' placeholder='Vin'/>
        </div>
        <div className="flex">
            <button className='flex justify-center w-full m-5 bg-orange-300 p-2 rounded text-black hover:bg-orange-500 hover:text-white'>
                Submit
            </button>
        </div>
      </form>
    </div>
  )
}

export default InfoForm
