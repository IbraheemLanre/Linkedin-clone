import React from "react";
import { useNavigate } from "react-router-dom";

const navigateInstance = useNavigate()

export const navigate = (param)=>{
navigateInstance(param)
}