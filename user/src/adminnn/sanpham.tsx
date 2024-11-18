import React, { useState, useEffect } from "react";
import "../css/admin.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firebaseDb } from "../firebase-config";
// import { useNavigate } from "react-router-dom";

interface IHotel {
  id: string;
  address: string;
  image: string;
  name: string;
  price: string;
  room_floor: number;
  room_id: string;
  status: string;
}

const defaultValue: IHotel = {
  id: "",
  address: "",
  image: "",
  name: "",
  price: "",
  room_floor: 0,
  room_id: "",
  status: "0",
};

const SanPham = () => {
  const [hotels, setHotels] = useState<IHotel[]>();
  const [formData, setFormData] = useState<IHotel>(defaultValue);
  const [id, setId] = useState<string>();

  // const navigate = useNavigate()

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const q = query(collection(firebaseDb, "hotels"), orderBy("name"));
    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        const item = doc.data() as IHotel;
        item.id = doc.id;
        return item;
      });
      setHotels(data);
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id: hotel_id, ...data } = formData;

    if (hotel_id === "") {
      await addDoc(collection(firebaseDb, "hotels"), data);
      setFormData(defaultValue)
      alert("Them khach san thanh cong")
    } else {
      await setDoc(doc(firebaseDb, "hotels", hotel_id), data);
      setFormData(defaultValue);
      alert("Cap nhat khach san thanh cong")
    }
  };

  const handleDelete = (id: string) => {

    deleteDoc(doc(firebaseDb, "hotels", id)).then(()=>loadData());
    alert("Xoa khach san thanh cong")

  }
  useEffect(() => {
    if(!id) return

    if (id !== "0") {
      console.log(id);
      
      getDoc(doc(collection(firebaseDb, "hotels"), id)).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as IHotel;
          data.id = snapshot.id;
          setFormData(data);
        } else setFormData(defaultValue);
      });
    }
  }, [id]);
  console.log(id);
  
  return (
    <>
      <div className="main-content">
        <div className="card w-100">
          <div className="card-header">
            <h2 className="fw-bold">Quản lý Khách sạn</h2>
          </div>
          <div className="card-body">
            <form action="" onSubmit={handleSubmit}>
              <div className="row row-cols-2 gy-4 mb-3">
                <div className="col">
                  <label htmlFor="name" className="form-label">
                    Tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Tên Khách Sạn"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="col">
                  <label htmlFor="address" className="form-label">
                    Đỉa Chỉ
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control form-control-lg"
                    placeholder="Địa Chỉ Khách Sạn"
                    onChange={handleChange}
                    value={formData.address}
                  />
                </div>
                <div className="col">
                  <label htmlFor="price" className="form-label">
                    Giá
                  </label>
                  <input
                    type="text"
                    name="price"
                    className="form-control form-control-lg"
                    placeholder="Giá Khách Sạn"
                    onChange={handleChange}
                    value={formData.price}
                  />
                </div>
                <div className="col">
                  <label htmlFor="room_id" className="form-label">
                    Mã Phòng
                  </label>
                  <input
                    type="text"
                    name="room_id"
                    className="form-control form-control-lg"
                    placeholder="Mã Phòng"
                    onChange={handleChange}
                    value={formData.room_id}
                  />
                </div>
                <div className="col">
                  <label htmlFor="room_floor" className="form-label">
                    Tầng
                  </label>
                  <input
                    type="number"
                    name="room_floor"
                    className="form-control form-control-lg"
                    placeholder="Tầng"
                    onChange={handleChange}
                    value={formData.room_floor}
                  />
                </div>
                <div className="col">
                  <label htmlFor="image" className="form-label">
                    Hình Ảnh
                  </label>
                  <input
                    type="text"
                    name="image"
                    className="form-control form-control-lg"
                    placeholder="Ảnh"
                    onChange={handleChange}
                    value={formData.image}
                  />
                </div>
                <div className="col">
                  <label htmlFor="status" className="form-label">
                    Tình Trạng
                  </label>
                  <div className="">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="status1"
                        onChange={handleChange}
                        value={formData.status}
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="status1">
                        Hết
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="status2"
                      />
                      <label className="form-check-label" htmlFor="status2">
                        Trống
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <button className="btn btn-lg btn-primary w-100" type="submit">
                  { id ? "Cap nhat" : "Them moi"}
                </button>
              </div>
            </form>
          </div>
          <div className="card-body">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Hình ảnh</th>
                  <th>Địa Chỉ</th>
                  <th>Ma phòng</th>
                  <th>Tầng</th>
                  <th>Tình trạng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {hotels?.map((items, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{items.name}</td>
                        <td>{items.price}</td>
                        <td>
                          <img
                            src={items.image}
                            width={50}
                            height={50}
                            alt={items.name}
                          />
                        </td>
                        <td>{items.address}</td>
                        <td>{items.room_id}</td>
                        <td>{items.room_floor}</td>
                        <td>{items.status === "0" ? "Trong" : "Het phong"}</td>
                        <td>
                          <button
                            className="btn btn-success me-2"
                            type="button"
                            onClick={() => setId(items.id)}
                          >
                            Sua
                          </button>
                          <button className="btn btn-danger" type="button" onClick={()=>handleDelete(items.id)}>
                            Xoa
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SanPham;
