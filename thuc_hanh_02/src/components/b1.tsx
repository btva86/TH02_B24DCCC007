import React, { useState } from "react";
import axios from "axios";

const B1: React.FC = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      const data = res.data;
      const info = data.current_condition[0];
      setTemp(info.temp_C);
      setDesc(info.weatherDesc[0].value);
    } catch {
      setTemp("");
      setDesc("Không tìm thấy dữ liệu thành phố này!");
    }
  };

  return (
    <div className="card">
      <h2>Bài 1: Ứng dụng thời tiết</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Xem thời tiết</button>

      {/* Hiển thị kết quả, mỗi dòng một phần */}
      {temp && <p>Nhiệt độ: {temp}°C</p>}
      {desc && <p>Tình trạng: {desc}</p>}
    </div>
  );
};

export default B1;
