import React, { useState, useEffect } from 'react';
import "./statistical.css";
const Statistical = () => {
    const [productCounts, setProductCounts] = useState([]);
    const [recallProductCounts, setRecallProductCounts] = useState([]);
    const [repairProductCounts, setRepairProductCounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8001/api/countProduct', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ tenSP: "iPhone 8" }) // Điều chỉnh nếu cần thiết
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data from server');
                }

                const data = await response.json();
                setRecallProductCounts([...data.productCounts]);
                setRepairProductCounts(data.repairProductCounts);

                // Tạo một bản sao của productCounts
                const updatedProductCounts = JSON.parse(JSON.stringify(data.productCounts));

                // Duyệt qua mảng repairProductCounts
                data.repairProductCounts.forEach((repairProduct) => {
                    // Tìm kiếm sản phẩm tương ứng trong productCounts
                    const existingProductIndex = updatedProductCounts.findIndex((product) => product._id === repairProduct._id);
                    if (existingProductIndex !== -1) {
                        // Nếu tìm thấy sản phẩm trong productCounts, cộng dữ liệu count của repairProduct vào count của product
                        updatedProductCounts[existingProductIndex].count += repairProduct.count;
                    } else {
                        // Nếu không tìm thấy sản phẩm trong productCounts, thêm sản phẩm đó vào mảng updatedProductCounts
                        updatedProductCounts.push(repairProduct);
                    }
                });

                // Cập nhật state với dữ liệu đã được cộng và thêm mới
                setProductCounts(updatedProductCounts);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Fetch data chỉ cần gọi một lần khi component được render lần đầu tiên

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <h1>Product Counts</h1>
                    <h2>Product Recall Counts</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Recall Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recallProductCounts.map((product) => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2>Product Repair Counts</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Repair Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {repairProductCounts.map((product) => (
                                    <tr key={product._id}>
                                        <td>{product._id}</td>
                                        <td>{product.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>   
                        <h2>Sum Product Counts</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Sum Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productCounts.map((product) => (
                                        <tr key={product._id}>
                                            <td>{product._id}</td>
                                            <td>{product.count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>     
                </div>
            )}
        </div>
    );
};

export default Statistical;
