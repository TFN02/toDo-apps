import { FC } from 'react';
import TableList from '../components/TableList';

const ListPassengerBus: FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop:"15%", marginBottom:"1rem"  }}>
        <TableList />
    </div>
  );
}

export default ListPassengerBus;