import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Chitiet from './home/chitiet';
import Chitiet2 from './home/chitiet2';
import Chitiet3 from './home/chitiet3';
import Ctmbks from './home/ctmbks';
import Ctmbks2 from './home/ctmbks2';
import Ctmbks3 from './home/ctmbks3';
import Dangky from './home/dangky';
import Dangnhap from './home/dangnhap';
import Datgoi from './home/dat-goi';
import Mbks from './home/may-bay-khach-san';
import Pggvud from './home/pggvud';
import Ptdc from './home/ptdc';
import TrangChu from './home/trangchu';
import Giohang from './home/giohang';
import Donkhachdat from "./adminnn/donkhachdat";
import Lienhe from "./adminnn/lienhe";
import Thongbao from "./adminnn/thongbao";
import Tinnhan from "./adminnn/tinnhan";

import SanPham from "./adminnn/sanpham";
import Home from "./adminnn/home";
import QuanLyNhanVien from "./adminnn/quanlynhanvien";
import Header from './components/header';
import "./firebase-config"
function App() {
  return (
    <Routes>
      <Route path='giohang' element={<Giohang/>}/>
      <Route path='chitiet' element={<Chitiet/>}/>
      <Route path='chitiet2' element={<Chitiet2/>}/>
      <Route path='chitiet3' element={<Chitiet3/>}/>
      <Route path='ctmbks' element={<Ctmbks/>}/>
      <Route path='ctmbks2' element={<Ctmbks2/>}/>
      <Route path='ctmbks3' element={<Ctmbks3/>}/>
      <Route path='dangky' element={<Dangky/>}/>
      <Route path='dangnhap' element={<Dangnhap/>}/>
      <Route path='datgoi' element={<Datgoi/>}/>
      <Route path='mbks' element={<Mbks/>}/>
      <Route path='Pggvud' element={<Pggvud/>}/>
      <Route path='ptdc' element={<Ptdc/>}/>
      <Route path='trangchu' element={<TrangChu/>}/>
      
      <Route path="admin" element={<Home />} />
      <Route path="donkhachdat" element={<Donkhachdat />} />
      <Route path="lienhe" element={<Lienhe />} />
      <Route path="quanlynhanvien" element={<QuanLyNhanVien />} />
      <Route path="sanpham" element={<SanPham />} />
      <Route path="thongbao" element={<Thongbao />} />
      <Route path="tinnhan" element={<Tinnhan />} />
      <Route path="/" element={<Header />} />

    </Routes>
  );
}

export default App;
