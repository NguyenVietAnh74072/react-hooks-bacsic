import React, { Fragment, useState } from "react";

function App() {
  const [ma_doi_tuong, SetMaLoaiDoiTuong] = useState([]);
  const [ten_doi_tuong, SetTenDoiTuong] = useState([]);
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
  const HanderChangeMaDoiTuong = (e) => {
    alert(e.target.value);
  };
  return (
    <Fragment>
      <form>
        <span>ma_doi_tuong</span>
        <input
          type="text"
          onchange={async (e) => HanderChangeMaDoiTuong(e)}
        ></input>
        <br></br>

        <span>ten_doi_tuong</span>
        <input
          type="text"
          onchange={(e) => alert(e.target.value)}
          value={ten_doi_tuong}
        />
        <br></br>
        <button onClick={async () => console.log(ten_doi_tuong)}>Luu</button>
        <span> Danh Sach </span>
        {data.map((x) => (
          <Fragment>
            <div> Ten doi tuong : {x.ten_doi_tuong}</div>
            <div> Ma doi tuong : {x.ma_doi_tuong} </div>
          </Fragment>
        ))}
      </form>
    </Fragment>
  );
}

export default App;
