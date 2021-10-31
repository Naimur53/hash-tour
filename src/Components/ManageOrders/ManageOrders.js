import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [approve, setApprove] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:5000/allOrders').then(result => setOrders(result.data));
    }, [approve]);
    console.log(orders);

    const handleApprove = orderInfo => {
        const { _id } = orderInfo;
        console.log(_id);
        axios.put(`http://localhost:5000/allOrders/${_id}`, { status: 'Approve' }).then(res => {
            console.log(res);
            if (res.data.matchedCount) {
                setApprove(approve + 1);
            }

        })

    }

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/allOrders/${id}`).then(res => {
            if (res.data.deletedCount) {
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }
        })
        console.log(id);
    }
    return (
        <Container className='py-5' >
            <Table variant="dark" striped bordered hover className='text-warning'>
                <thead>
                    <tr>
                        <th>Order Name</th>
                        <th>Email address</th>
                        <th>Date of order</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr key={order._id}>
                                <td className='text-capitalize text-white fw-light'>{order.itemName}</td>
                                <td className='text-white  fw-light'>{order.email}</td>
                                <td className='text-white  fw-light'>{order.date}</td>
                                <td className='text-white  fw-light'>{order.address}</td>
                                <td className={order.status === 'Pending' ? 'text-primary' : 'text-success'}>{order.status}</td>
                                <td>
                                    {
                                        order.status === "Pending" && <button onClick={() => handleApprove(order)} className="btn p-0 text-success me-3">Approve</button>
                                    }

                                    <button onClick={() => handleDelete(order._id)} className="btn p-0 text-danger">Delete</button>

                                </td>
                            </tr>)
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default ManageOrders;