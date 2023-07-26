import React from "react";
import { useParams } from "react-router-dom";

export default function GameDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nguyễn Văn A</th>
            <th scope="col">Nguyễn Văn B</th>
            <th scope="col">Nguyễn Văn C</th>
            <th scope="col">Nguyễn Văn D</th>
          </tr>
          <tr>
            <th scope="col">Sum of point</th>
            <th scope="col">10</th>
            <th scope="col">20</th>
            <th scope="col">30</th>
            <th scope="col">40</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-warning">Create at round</button>
    </>
  );
}
