import React from "react";
import { useParams } from "react-router-dom";
import { INTERNETS } from "../../static";
import PhoneIcon from '@mui/icons-material/Phone';

function Internet() {
  const params = useParams();
  const oneItem = INTERNETS?.find(({ depId }) => depId === params.id);
  return (
    <div>
      <h2>Internet</h2>
      <table border={1} >
        <tbody>
          <td>nomi</td>
          <td>narxi</td>
          <td>usd</td>
          <td>sorov</td>
        </tbody>
        {oneItem?.items?.map((i, inx) => (
          <tr>
            <td>{i.title}</td>
            <td>{i.price}</td>
            <td>{i.usd}</td>
            <td><a href="tel:*100#"><PhoneIcon /></a></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Internet;
