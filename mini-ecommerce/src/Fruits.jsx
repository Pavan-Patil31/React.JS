
import React, { useState } from 'react';
import useProducts from './useProducts';
import './Fruits.css';

const Fruits = () => {
    const { products, loading, refreshProducts, deleteProduct } = useProducts('https://jsonplaceholder.typicode.com/users');
    console.log(products);

    const [searchTerm, setSearchTerm] = useState('');
    const [emailSearch, setEmailSearch] = useState('');

    const filteredUsers = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        p.email.toLowerCase().includes(emailSearch.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {/* Navbar */}
            {/* <nav className="navbar" > */}
              <h3>User Detials</h3>
                {/* <div className="searchBar" > */}
                <div className="d-flex align-items-center gap-5 mb-3 bg-light p-2 rounded-shadow">
                    <input
                        type="text"
                        placeholder="Search by name..."
                         className="form-control w-50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Search by email..."
                         className="form-control w-50"
                        value={emailSearch}
                        onChange={(e) => setEmailSearch(e.target.value)}
                    />
                    {/* </div> */}
                </div>
                {/* <h2 className="site-title">User Detail</h2> */}
            {/* </nav> */}

            
            <table className="table">
                <thead className="tableHead">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((p, index) => (
                        <tr key={index}>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>
                                <button onClick={() => deleteProduct(p.id)} className='btn btn-primary'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Fruits;
