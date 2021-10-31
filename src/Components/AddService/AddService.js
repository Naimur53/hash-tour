import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import SingleCard from '../SingleCard/SingleCard';

const AddService = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://bloodcurdling-skeleton-61887.herokuapp.com/addService', data)
            .then(res => {
                console.log('res', res);
                if (res.status === 200) {
                    notify();
                    reset();
                }
            });

    }
    const liveCardData = { name: watch('name'), des: watch('des'), price: watch('price'), img: watch('img') };
    console.log(liveCardData);

    const notify = () => {
        toast.success("Successfully added !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };
    return (
        <div className='container py-5'>
            <h1 className='text-white fw-light text-center py-5'>Add service with live preview</h1>
            <div className="row">
                <div className="col-md-6">
                    <SingleCard info={liveCardData}></SingleCard>
                </div>
                <div className="col-md-6">
                    <form className='bg-dark p-5' onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder='Enter Service Name' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white'  {...register("name", { required: true })} />
                        <br />
                        <input placeholder='Enter Description' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white'  {...register("des", { required: true })} />
                        <br />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input placeholder='Enter Price' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' {...register("price", { required: true })} />
                        <input placeholder='Enter img link' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' {...register("img", { required: true })} />

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />

                        <input className='btn btn-primary text-white text-center w-100 rounded-0' value='Add Service' type="submit" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddService;