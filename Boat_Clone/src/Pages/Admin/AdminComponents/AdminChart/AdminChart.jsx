import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Chartdata } from '../../../../../DataForImages'

export default function AdminChart() {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={Chartdata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Revenues" stroke="#8884d8" />
                    <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}
