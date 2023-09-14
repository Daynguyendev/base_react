'use client'
import { useState, useEffect } from 'react';
import getAddress from '../API/addressAPI.js'


function Body(props) {
    const [address, setAddress] = useState();
    const [display, setDisplay] = useState(false);
    const [chamCong, setChamcong] = useState(false);
    const fetchaddress = async () => {
        const res = await getAddress.getAddress({});
        if (res !== null) {
            setAddress(res.data.results);
            console.log('123', res.data.results)
        }
    };
    const thongke = () => {
        setDisplay(!display);
        fetchaddress()
    }
    const chamcong = () => {
        setDisplay(false);
        setChamcong(!chamCong)
    }
    useEffect(() => {
        try {
            const fetchaddress = async () => {
                const res = await getAddress.getAddress({});
                if (res !== null) {
                    setAddress(res.data.results);
                    console.log('123', res.data.results)
                }
            };
            fetchaddress();
        } catch (error) {
            console.log('Failed to fetch idUser: ', error);
        }
    }, []);

    return (
        <div style={{ minHeight: '400px', backgroundColor: 'white' }}>
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
                <button onClick={thongke} style={{ backgroundColor: 'grey', border: '3px solid', justifyContent: 'center' }}>Thống kê</button>
                <button onClick={chamcong} style={{ backgroundColor: 'grey', border: '3px solid', justifyContent: 'center' }}>Chấm công</button>

            </div>
            {
                chamCong ? <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', paddingTop: '40px', margin: '5px' }} >
                    <label>
                        Mã nhân viên <input name="manhanvien" style={{ border: '2px solid' }} />
                    </label>
                    <label>
                        Đơn vị <input name="donvi" style={{ border: '2px solid' }} />
                    </label>
                    <label>
                        Công việc đã làm <input name="myInput" style={{ border: '2px solid' }} />
                    </label>
                    <button style={{ border: '2px solid', marginLeft: '5px' }} >Chấm công</button>

                </div> : ('')
            }

            {address && display ?
                address.map((address, index) => (
                    <div style={{ backgroundColor: 'gray', padding: '1px', margin: '10px' }} key={index}>
                        <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>{address.id_khach_hang}</h1>
                        <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>{address.id_dia_chi}</h1>
                        <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>{address.ten_khach_hang}</h1>
                        <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>{address.ten_dia_chi}</h1>
                    </div>
                )) : ('')
            }

        </div>
    );
}

export default Body;