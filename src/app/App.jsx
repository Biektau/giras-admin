import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CommonInfo from "../contents/commonInfo/CommonInfo";
import WorkWear from "../contents/workWear/WorkWear";
import Shoes from "../contents/shoes/Shoes";
import Gloves from "../contents/gloves/Gloves";
import PPE from "../contents/ppe/PPE";
import ItemInfo from "../contents/itemInfo/ItemInfo";
import Update from "../contents/update/Update";
import Delete from "../contents/delete/Delete";
import Create from "../contents/create/Create";
import Login from "../login/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CommonInfo />} />
        <Route path="workWear" element={<WorkWear />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="gloves" element={<Gloves />} />
        <Route path="ppe" element={<PPE />} />
      </Route>
      <Route path="/:category/itemInfo/:id" element={<ItemInfo />} />
      <Route path="/:category/update/:id" element={<Update />} />
      <Route path="/:category/delete/:id" element={<Delete />} />
      <Route path="/:category/create" element={<Create />} />
    </Routes>
  );
}
