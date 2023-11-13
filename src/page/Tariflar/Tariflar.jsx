import React from "react";
import { useParams } from "react-router-dom";
import { Tarif } from "../../static";
import PhoneIcon from '@mui/icons-material/Phone';


function Tariflar() {
    const params = useParams()
    const oneItem = Tarif?.find(({ depId }) => depId === params.id)


    return (


        <div>
            <h2>Tariflar</h2>
            <table  border={1}>
                <tbody>
                    <td>Nomi</td>
                    <td>Internet</td>
                    <td>Ishtimoiy</td>
                    <td>Qong'iroqlar</td>
                    <td>Sms </td>
                    <td>Narxi</td>
                    <td>Usd</td>
                    <td></td>
                </tbody>
                {
                    oneItem?.items?.map((i)=>(
                        <tr>
                            <td>{i.title}</td>
                            <td>{i.internet}</td>
                            <td>{i.ishtiomoiy}</td>
                            <td>{i.qonggiroqlar}</td>
                            <td>{i.smspaket}</td>
                            <td>{i.narxi}</td>
                        </tr>

                    ))
                }
            </table>


        </div>
    )
}

export default Tariflar