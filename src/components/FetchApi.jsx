import React, { useEffect } from "react";
import { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

function FetchApi() {
  const [revenue, setRevenue] = useState([]);
  /* eslint-disable */
  const [select, setSelect] = useState("");
  const fetchApi = () => {
    const api = "http://fetest.pangeatech.net/data";

    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRevenue(data);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [revenue]);

  return (
    <div>
      <div>
        <nav className="flex flex-row justify-evenly space-50 bg-red-400 h-10">
          <select
            name="Revenue type"
            onChange={(e) => setSelect(e.target.value)}
          >
            {revenue.map((type) => (
              <option>{type.revenue_type}</option>
            ))}
          </select>
          <span>Hi John Doe</span>
        </nav>
        {/* {revenue.map((type) => (
          <LineChart width={500} height={300} data={select}>
            <XAxis dataKey={type.year} />
            <YAxis dataKey={type.acv} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        ))} */}
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-3 px-6">S No.</th>
                <th className="py-3 px-6">Line of Business</th>
                <th className="py-3 px-6">Revenue Type</th>
                <th className="py-3 px-6">Product</th>
                <th className="py-3 px-6">Posting</th>
                <th className="py-3 px-6">ACV</th>
                <th className="py-3 px-6">TCV</th>
                <th className="py-3 px-6">Revenue</th>
              </tr>
            </thead>
            {revenue.map((type) => (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-4 px-6">{type.S_no}</td>
                  <td className="py-4 px-6">{type.line_of_business}</td>
                  <td className="py-4 px-6">{type.revenue_type}</td>
                  <td className="py-4 px-6">{type.product}</td>
                  <td className="py-4 px-6">
                    {type.month} - {type.year}
                  </td>
                  <td className="py-4 px-6">{type.acv}</td>
                  <td className="py-4 px-6">{type.tcv}</td>
                  <td className="py-4 px-6">${type.revenue}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default FetchApi;
