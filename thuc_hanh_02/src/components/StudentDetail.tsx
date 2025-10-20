import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch(() => alert("Không tìm thấy thông tin sinh viên!"));
  }, [id]);

  if (!student) return <p>Đang tải...</p>;

  return (
    <div className="card">
      <h2>Chi tiết sinh viên</h2>
      <p><b>Tên:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Điện thoại:</b> {student.phone}</p>
      <p><b>Website:</b> {student.website}</p>
      <Link to="/b2" style={{ color: "purple" }}>← Quay lại danh sách</Link>
    </div>
  );
};

export default StudentDetail;
