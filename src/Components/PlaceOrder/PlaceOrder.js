import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import CardDetails from '../CardDetails/CardDetails';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import './placeOrder.css'
import { Alert, Skeleton } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [data, setData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`https://bloodcurdling-skeleton-61887.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
            });

    }, []);

    // notify function 
    const notify = () => {
        toast.success("Successfully  order !", {
            position: toast.POSITION.TOP_CENTER
        });
    };


    // form  
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = orderInfo => {
        orderInfo["img"] = data.img;
        orderInfo["itemId"] = data._id;
        orderInfo['status'] = 'Pending';
        axios.post('https://bloodcurdling-skeleton-61887.herokuapp.com/order', orderInfo)
            .then(res => {
                console.log('res', res);
                if (res.status === 200) {
                    notify();
                    <Alert severity="success">This is a success alert — check it out!</Alert>
                    reset();
                }
            });

    }
    console.log(data);
    return (
        <Container className='py-5 min-vh-100'>
            <div className="row">
                <div className="col-md-6">
                    {
                        Object.keys(data).length === 0 ? <div>
                            <Skeleton
                                sx={{ bgcolor: 'grey.900' }}
                                variant="rectangular"
                                animation="wave"
                                className='w-100 '
                                height={300}
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.900' }}
                                variant="rectangular"
                                animation="wave"
                                className='w-100 mt-3'
                                height={30}
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.900' }}
                                variant="rectangular"
                                animation="wave"
                                className='w-100 mt-3'
                                height={15}
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.900' }}
                                variant="rectangular"
                                animation="wave"
                                className='w-100 mt-2'
                                height={15}
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.900' }}
                                variant="rectangular"
                                animation="wave"
                                className='w-100 mt-2'
                                height={15}
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.900' }}
                                variant="rectangular"
                                animation="wave"
                                className='  mt-2'
                                width={100}
                                height={15}
                            />
                        </div> : <CardDetails data={data}></CardDetails>
                    }

                </div>
                <div className="col-md-6">
                    {
                        data.name ? <form className='place-order-from h-100 shadow p-5' onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input placeholder='Full Name' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' defaultValue={user.displayName} {...register("UserName")} />
                            <br />
                            <input placeholder='Email' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' defaultValue={user.email} {...register("email")} />
                            <br />
                            <input type='date' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' defaultValue={date} {...register("date")} />
                            <br />
                            {/* include validation with required or other standard HTML validation rules */}
                            <input placeholder='Address' autoFocus className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' {...register("address", { required: true })} />
                            <input placeholder='Description' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' {...register("description", { required: true })} />


                            <input placeholder='Event Name' className='w-100 mb-4 border-warning border-bottom-3 py-2 rounded px-2 bg-transparent border text-white' defaultValue={data.name} {...register("itemName", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />

                            <input disabled={data.name ? false : true} className='btn btn-warning text-dark rounded-2 text-center w-100 rounded-0' value='Place Order' type="submit" />
                        </form> : <Spinner animation="grow" variant="dark" />

                    }
                    <ToastContainer />
                </div>
            </div>

        </Container>
    );
};

export default PlaceOrder;