import React, { useState } from "react";
import medicines from "../component/medicines";
// component
function Home() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const filtered = medicines
        .filter((m) =>
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.category.toLowerCase().includes(search.toLowerCase())
        )
        //sort the filtered list
        .sort((a, b) => {
            //if user chose price sort from cheapest to most expensive
            if (sortBy === "price") return a.price - b.price;
            //otherwise sort alphabatically by name
            return a.name.localeCompare(b.name);
        });
    //what user see on the screen
    return (
        <div>
            <h1>Pharmacy Products</h1>
            <input
                type="text"
                placeholder="Search medicines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Price (JD)</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((m) => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>{m.category}</td>
                            <td>{m.brand}</td>
                            <td>{m.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Home;