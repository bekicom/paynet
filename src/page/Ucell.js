import React from 'react'
// import ucell from "../Data"
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmsIcon from '@mui/icons-material/Sms';
import SimCardIcon from '@mui/icons-material/SimCard';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
// import Uzmobilee from './Uzmobilee';
export default function Ucell() {
  const navigate = useNavigate()

  return (
    <div className='ucell_carts'>

      <button onClick={() => navigate('internet')} className='card'>   <LanguageIcon /> Internet paketlar</button>
      <button className='card'> #   Usd kodlar</button>
      <button className='card'> <SimCardIcon />Tarif rejalari</button>
      <button className='card'> <SmsIcon />Sms toplamlar</button>
      <button className='card'>   <AccessTimeIcon /> Daqiqalar</button>
      <button className='card'> <SettingsIcon /> Xizmatlar </button>
      <div className="deg">

      </div>

    </div>
  )
}
