'use client'
import { useState, useEffect } from 'react';
import getAddress from '../API/addressAPI.js'
import { useSnackbar } from 'notistack';

function Body(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [address, setAddress] = useState();
    const [display, setDisplay] = useState(false);
    const [chamCong, setChamcong] = useState(false);
    const [chamCongVao, setchamCongVao] = useState(false);
    const [maNv, setMaNv] = useState();
    const [donVi, setDonVi] = useState();
    const [congViec, setCongViec] = useState();
    const [maNvXoa, setMaNvXoa] = useState();
    const [sua, setSua] = useState(false);
    const [idKH, setIdKH] = useState();
    const [tenKH, setTenKH] = useState();
    const [tenDC, setTenDC] = useState();
    const [sdtKH, setSdtKH] = useState();




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
        setchamCongVao(false)
        setChamcong(false)
    }
    const chamcongvao = () => {
        setMaNv('')
        setDisplay(false);
        setchamCongVao(!chamCongVao)
        setChamcong(false)
    }

    const chamcongra = () => {
        setMaNv('')
        setDisplay(false);
        setChamcong(!chamCong)
        setchamCongVao(false)
    }


    const deleteChamcong = async (manv) => {
        const res = await getAddress.delete(manv);
        if (res !== null) {
            fetchaddress()
            alert('Thành công')
        }
        else
            alert('Xóa thất bại')
    };


    const suaChamcong = () => {
        setSua(!sua)
    }

    const suaChamcongAPI = async (manv) => {
        const res = await getAddress.update({
            id_khach_hang: idKH,
            id_dia_chi: manv,
            ten_dia_chi: tenDC,
            ten_khach_hang: tenKH,
            sdt_khach_hang: sdtKH,
        })
        if (res !== null) {
            fetchaddress()
            alert('Update Thành công')
        }
        else
            alert('Update thất bại')
    };

    const submitChamCongRa = () => {
        if (maNv) {
            getAddress.post({
                id_khach_hang: maNv,
                id_dia_chi: donVi,
                ten_dia_chi: congViec,
                ten_khach_hang: maNv,
                sdt_khach_hang: '0987654567'
            })

                .then(function (response) {
                    alert('Thành công')
                })
                .catch(error => alert('Thất bại'));


        }
        else
            alert('nhập vào mã nhân viên')
    }

    const submitChamCongVao = () => {
        if (maNv) {
            getAddress.post({
                id_khach_hang: maNv,
                id_dia_chi: maNv,
                ten_dia_chi: maNv,
                ten_khach_hang: maNv,
                sdt_khach_hang: '0987654567'
            })

                .then(function (response) {
                    alert('Thành công')
                })
                .catch(error => alert('Thất bại'));


        }
        else
            alert('nhập vào mã nhân viên')
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
                <button onClick={chamcongvao} style={{ backgroundColor: 'green', border: '3px solid', justifyContent: 'center', marginRight: '50px' }}>Check In</button>
                <button onClick={thongke} style={{ backgroundColor: 'cyan', border: '3px solid', justifyContent: 'center', marginRight: '50px' }}>Thống kê</button>
                <button onClick={chamcongra} style={{ backgroundColor: 'red', border: '3px solid', justifyContent: 'center', marginRight: '50px' }}>Check Out</button>
            </div>
            {/* ////////////// */}
            {
                chamCongVao ? <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', paddingTop: '40px', margin: '5px' }} >
                    <label>
                        Mã nhân viên <input name="manhanvien" onChange={(event) => setMaNv(event.target.value)} style={{ border: '2px solid' }} />
                    </label>
                    <button style={{ border: '2px solid', marginLeft: '5px', backgroundColor: 'cyan' }} onClick={submitChamCongVao} >Chấm công</button>

                </div> : ('')
            }

            {/* ////////////// */}
            {
                chamCong ? <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', paddingTop: '40px', margin: '5px' }} >
                    <label>
                        Mã nhân viên <input name="manhanvien" style={{ border: '2px solid' }} onChange={(event) => setMaNv(event.target.value)} />
                    </label>
                    <label>
                        Đơn vị <input name="donvi" style={{ border: '2px solid' }} onChange={(event) => setDonVi(event.target.value)} />
                    </label>
                    <label>
                        Công việc đã làm <input name="myInput" style={{ border: '2px solid' }} onChange={(event) => setCongViec(event.target.value)} />
                    </label>
                    <button style={{ border: '2px solid', marginLeft: '5px', backgroundColor: 'cyan' }} onClick={submitChamCongRa} >Chấm công</button>

                </div> : ('')
            }


            {address && display ?
                address.map((address, index) => (
                    <div style={{ backgroundColor: 'gray', padding: '1px', margin: '10px' }} key={index}>


                        <div>
                            <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>ID địa chỉ : {address.id_dia_chi}</h1>
                            <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>ID khách hàng : {address.id_khach_hang}</h1>
                            <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>Tên khách hàng : {address.ten_khach_hang}</h1>
                            <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>Tên địa chỉ : {address.ten_dia_chi}</h1>
                            <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>SĐT Khách hàng : {address.sdt_khach_hang}</h1>


                        </div>
                        {sua ? <div>
                            <label> ID khách hàng
                                <input name="donvi" style={{ border: '2px solid' }} onChange={(event) => setIdKH(event.target.value)} />


                            </label>
                            <label> Tên khách hàng
                                <input name="donvi" style={{ border: '2px solid' }} onChange={(event) => setTenKH(event.target.value)} />


                            </label>
                            <label> Tên địa chỉ
                                <input name="donvi" style={{ border: '2px solid' }} onChange={(event) => setTenDC(event.target.value)} />


                            </label>
                            <label> SĐT
                                <input name="donvi" style={{ border: '2px solid' }} onChange={(event) => setSdtKH(event.target.value)} />


                            </label>


                            <button style={{ margin: '10px', backgroundColor: 'yellow', minHeight: '50px', minWidth: '100px' }} onClick={() => suaChamcongAPI(address.id_dia_chi)}>Sửa </button>



                        </div> : ('')}

                        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', backgroundColor: 'red' }}>
                            <button style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }} onClick={() => deleteChamcong(address.id_dia_chi)}>Xóa</button>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', backgroundColor: 'green' }}>
                            <button style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }} onClick={() => suaChamcong()}>Sửa</button>

                        </div>


                    </div>
                )) : ('')
            }

        </div>
    );
}

export default Body;