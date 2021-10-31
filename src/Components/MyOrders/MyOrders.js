import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrderCard from '../../Components/MyOrderCard/MyOrderCard'
import { toast, ToastContainer } from 'react-toastify';
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user.email;
    useEffect(() => {
        axios.get(`https://bloodcurdling-skeleton-61887.herokuapp.com/myorders?user=${email}`)
            .then(result => setOrders(result.data))

    }, []);

    const notify = () => {
        toast.success("Successfully delete !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };
    const handleDelete = _id => {
        if (window.confirm("Are you sure")) {
            axios.delete(`https://bloodcurdling-skeleton-61887.herokuapp.com/myorder/${_id}`).then(res => {
                if (res.data.deletedCount) {
                    notify();
                    const remaining = orders.filter(order => order._id !== _id);
                    setOrders(remaining);
                }
            });
        }
    }
    return (
        <div className='container min-vh-100 pt-5'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    orders.map(order => <MyOrderCard key={order._id} handleDelete={handleDelete} info={order}></MyOrderCard>)
                }
            </div>

            <ToastContainer />
        </div>
    );
};

export default MyOrders;