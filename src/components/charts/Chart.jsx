import React,{useState} from "react";
import "./Chart.css";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
  Bar,
} from "recharts";
import { BarChart } from "recharts";


export default function Chart({ title, data, dataKey, grid,positive,negative }) {
    
    return (
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="positive" fill="#97d17d" />
            <Bar dataKey="negative" fill="#f55142" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}
