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
        axios.get(`http://localhost:5000/myorders?user=${email}`)
            .then(result => setOrders(result.data))

    }, []);

    const notify = () => {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };
    const handleDelete = _id => {
        if (window.confirm("Are you sure")) {
            axios.delete(`http://localhost:5000/myorder/${_id}`).then(res => {
                if (res.data.deletedCount) {
                    notify();
                    const remaining = orders.filter(order => order._id !== _id);
                    setOrders(remaining);
                }
            });
        }
    }
    return (
        <div className='container'>
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