import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

const B2: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch(() => alert("Không tải được danh sách sinh viên"));
  }, []);

  return (
    <div className="card">
      <h2>Bài 2: Ứng dụng danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`/students/${s.id}`} style={{ color: "blue", textDecoration: "underline" }}>
              {s.name}
            </Link>{" "}
            – {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default B2;
