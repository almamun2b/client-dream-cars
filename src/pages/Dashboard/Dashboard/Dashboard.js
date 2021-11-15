import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews/Reviews';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth();
    return (
        <div>
            <div className="row mx-auto">
                <div className="col-4 col-lg-2 bg-info h-100">
                    <div className="row">
                        <Nav.Link as={Link} to={`${url}/MyOrders`}>My Orders</Nav.Link>
                    </div>
                    <div className="row">
                        <Nav.Link as={Link} to={`${url}/reviews`}>Reviews</Nav.Link>
                    </div>
                    <div className="row">
                        <Nav.Link as={Link} to={`${url}/payment`}>Payment</Nav.Link>
                    </div>
                    {admin && <div>
                        <hr />
                        <div className="row">
                            <Nav.Link as={Link} to={`${url}/ManageAllOrders`}>Manage All Orders</Nav.Link>
                        </div>
                        <div className="row">
                            <Nav.Link as={Link} to={`${url}/AddProduct`}>Add Product</Nav.Link>
                        </div>
                        <div className="row">
                            <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                        </div>
                        <div className="row">
                            <Nav.Link as={Link} to={`${url}/ManageProducts`}>Manage Products</Nav.Link>
                        </div>
                    </div>}

                    <div className="row">
                        <Button onClick={logOut}>Logout</Button>
                    </div>
                </div>
                <div className="col-8 col-lg-10 h-100">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/MyOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/reviews`}>
                            <Reviews></Reviews>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <AdminRoute path={`${path}/ManageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/AddProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/ManageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;