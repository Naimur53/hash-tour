import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/addService', data)
            .then(res => {
                console.log('res', res);
                if (res.status === 200) {
                    alert('successfully done');
                    reset();
                }
            });

    }
    return (
        <div>
            <form className='shadow p-5' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder='Enter Service Name' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3'  {...register("name", { required: true })} />
                <br />
                <input placeholder='Enter Description' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3'  {...register("des", { required: true })} />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder='Enter Price' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' {...register("price", { required: true })} />
                <input placeholder='Enter img link' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' {...register("img", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />

                <input className='btn btn-primary text-white text-center w-100 rounded-0' value='Registration' type="submit" />
            </form>
        </div>
    );
};

export default AddService;