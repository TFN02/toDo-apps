import { FC } from 'react';
import { passengerList } from "../utils";

interface Passenger {
  id: string;
  name: string;
  age: number;
}

const TableList: FC = () => {
  return (
    <table style={{ width:"20rem", textAlign: "center", border: "#ddd solid 1px" }}>
      <thead style={{ backgroundColor: "#d3d3d3", borderBottom: "#ddd solid 1px"}}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      {passengerList.length > 0 ? (
        passengerList.map((item: Passenger) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          </tbody>
        ))
      ) : (
        <p>Passengger is Empty !</p>
      )}
    </table>
  );
};

export default TableList;