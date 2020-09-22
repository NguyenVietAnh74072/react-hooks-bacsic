import React, { Fragment, useState } from "react";

function ColorBox() {
  const data = [
    {
      ma_doi_tuong: "LDT0001",
      ten_doi_tuong: "A",
    },
    {
      ma_doi_tuong: "LDT0002",
      ten_doi_tuong: "B",
    },
  ];
  const [ma_doi_tuong, SetMaLoaiDoiTuong] = useState([]);
  const [ten_doi_tuong, SetTenDoiTuong] = useState([]);
  const [index, Setindex] = useState(0);
  const Color_list = ["black", "blue", "green", "yellow", "deeppink"];
  const [color, setColor] = useState("green");
  const HandeColorBox = async () => {
    // get randome color ->setColor
    index != 4 ? Setindex(index + 1) : Setindex(0);
    setColor(Color_list[index]);
    console.log(index);
  };
  const a = () => {};
  return (
    <Fragment>
      <span>ma_doi_tuong</span>
      <input type="text" onchange={async (e) => alert(e.target.value)}></input>
      <br></br>

      <span>ten_doi_tuong</span>
      <input
        type="text"
        onchange={async (key) => {
          console.log(key.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={async () => console.log(ma_doi_tuong)}>Luu</button>
      <span> Danh Sach </span>
      {data.map((x) => (
        <Fragment>
          <div> Ten doi tuong : {x.ten_doi_tuong}</div>
          <div> Ma doi tuong : {x.ma_doi_tuong} </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default ColorBox;
