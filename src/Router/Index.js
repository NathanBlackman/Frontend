import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Views/Home";

export default function Router() {

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </div>
    )
}