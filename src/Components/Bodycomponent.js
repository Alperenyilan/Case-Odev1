import React from 'react';
import "antd/dist/antd.css";
import './BodyComp.css';
import arrow from './arrows.png';
import RadioBtn from './RadioBtn';
import DisplayFlight from './FlightList';
import FlightData from './FlightData';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import './TopHeaderStyle.css'
import { useState } from 'react';
import HeaderTop from './HeaderTop';



function Bodycomponent() {

    const { Option } = Select;

    const provinceData =
        ['Şehir Seç',
            'İstanbul',
            'İzmir',
            'Bursa',
            'Eskisehir',
            'Adana',
            'Bodrum',
            'Mugla',
            'Balikesir',
        ];
    const [srcs, setSource] = useState(provinceData[0]);
    const handleProvinceChange = (e) => {
        console.log(e);
        setSource(e)
    }
    const [dest, setDest] = useState(provinceData[0]);
    const handleProvinceChange1 = (e) => {
        console.log(e);
        setDest(e)
    }
    // trying to put searchfligjt into the same file code starts here
    const [data, setData] = useState(FlightData);
    let x = srcs.toString();
    let y = dest.toString();

    let flight = null;
    let allflight = null;
    let filteredFlightData = [];

    allflight = FlightData.map((f, index) => {
        return <DisplayFlight data={f} key={index} />
    });
    const handelSearch = () => {
        const FlightData = [...data];
        filteredFlightData = FlightData.filter((item) => item.from === x && item.to === y);
        setData(filteredFlightData);
        console.log(filteredFlightData);
        console.log(data);
        flight = data.map((p, index) => {
            return <DisplayFlight data={p} key={index} />
        });
        console.log(flight);
    }
    return (
        <>
            <HeaderTop />
            <div className="main_div_full">
                <div className="bodyComp">
                    <h2>Armadeus ile uçuş keyfi!</h2>
                    <div className="from-to" >
                        <div>
                            <div className="drop-class">
                                <h3>Nereden:</h3>
                                <Select defaultValue={provinceData[0]} onChange={handleProvinceChange} className="drop-control">
                                    {provinceData.map(province => (
                                        <Option key={province} className="menu-item">{province}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <img id="arrows" src={arrow} alt="arrows" />
                        </div>
                        <div>
                            <div className="drop-class">
                                <h3>Nereye: </h3>
                                <Select defaultValue={provinceData[0]} onChange={handleProvinceChange1} className="drop-control">
                                    {provinceData.map(province => (
                                        <Option key={province} className="menu-item">{province}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="TripRadio">
                        <RadioBtn />
                    </div>


                    <div className="serch_div">
                        <div className="btnDiv">
                            <button id="searcBtn" onClick={handelSearch}>Arama</button>
                        </div>
                        <p className="all-flights">Aramanıza Göre Uygun Uçuşlar: {data.length}   </p>
                        {flight}
                    </div>
                </div>
                <div className="flights">
                    <p className="all-flights">Tüm Uçuşlar</p>
                    {allflight}
                </div>
            </div>
        </>
    )

}
export default Bodycomponent