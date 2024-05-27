import React, { useState } from 'react';

const Repair = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [mangHinhChecked, setMangHinhChecked] = useState(false);
    const [pinChecked, setPinChecked] = useState(false);
    const [rungChecked, setRungChecked] = useState(false);
    const [camTruocChecked, setCamTruocChecked] = useState(false);
    const [camSauChecked, setCamSauChecked] = useState(false);
    const [chanSacChecked, setChanSacChecked] = useState(false);
    const [loaChecked, setLoaChecked] = useState(false);
    const [voChecked, setVoChecked] = useState(false);
    const [lungChecked, setLungChecked] = useState(false);
    const [kinhChecked, setKinhChecked] = useState(false);
    const [nutHomeChecked, setNutHomeChecked] = useState(false);
    const [khaySimChecked, setKhaySimChecked] = useState(false);
    const [repairCost, setRepairCost] = useState(null);
    const [phoneNumber,setPhoneNumber]=useState('')


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

   const handleCost = async (event)=>{
        event.preventDefault();
       
        const infoRepair = {
            tenSP: selectedOption,
            mangHinh: mangHinhChecked,
            pin: pinChecked,
            rung: rungChecked,
            camTruoc: camTruocChecked,
            camSau: camSauChecked,
            chanSac: chanSacChecked,
            loa: loaChecked,
            vo: voChecked,
            lung: lungChecked,
            kinh: kinhChecked,
            nutHome: nutHomeChecked,
            khaySim: khaySimChecked,
        }

        try {
            const response = await fetch('http://localhost:8001/api/sendInfoRepair', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(infoRepair)
            });

            if (!response.ok) {
                throw new Error('Failed to send data to server');
            }

            const data = await response.json();
            console.log('Data from server:', data);
            setRepairCost(data.gia); // Set the repair cost
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSubmitRepair = async(event)=>{
        event.preventDefault();
       
        const infoRepair = {
            tenSP: selectedOption,
            soDienThoai:phoneNumber,
            mangHinh: mangHinhChecked,
            pin: pinChecked,
            rung: rungChecked,
            camTruoc: camTruocChecked,
            camSau: camSauChecked,
            chanSac: chanSacChecked,
            loa: loaChecked,
            vo: voChecked,
            lung: lungChecked,
            kinh: kinhChecked,
            nutHome: nutHomeChecked,
            khaySim: khaySimChecked,
        }

        try {
            const response = await fetch('http://localhost:8001/api/sendInfoRepairForSave', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(infoRepair)
            });

            if (!response.ok) {
                throw new Error('Failed to send data to server');
            }

            const data = await response.json();
            alert('Thông tin đã được lưu!');
            console.log('Data from server:', data);
        
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmitRepair}>
            <div className="input-column" >
                            <label htmlFor="">Số điện thoại: </label>
                            <input
                                type="text"
                                placeholder='Số điện thoại'
                                id='phoneNumber'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
            <div>
                        <label htmlFor="">Loại sản phẩm: </label>
                        <select style={{ width: 150 }} value={selectedOption} onChange={handleSelectChange}>
                            <option value="">Chọn sản phẩm</option>
                            <option value="iPhone 5">iPhone 5</option>
                            <option value="iPhone 5S">iPhone 5S</option>
                            <option value="iPhone 6">iPhone 6</option>
                            <option value="iPhone 6 Plus">iPhone 6 Plus</option>
                            <option value="iPhone 6S">iPhone 6S</option>
                            <option value="iPhone 6S Plus">iPhone 6S Plus</option>
                            <option value="iPhone 7">iPhone 7</option>
                            <option value="iPhone 7 Plus">iPhone 7 Plus</option>
                            <option value="iPhone 8">iPhone 8</option>
                            <option value="iPhone 8 Plus">iPhone 8 Plus</option>
                            <option value="iPhone X">iPhone X</option>
                            <option value="iPhone XR">iPhone XR</option>
                            <option value="iPhone XS">iPhone XS</option>
                            <option value="iPhone XS Max">iPhone XS Max</option>
                            <option value="iPhone 11">iPhone 11</option>
                            <option value="iPhone 11 Pro">iPhone 11 Pro</option>
                            <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
                            <option value="iPhone 12">iPhone 12</option>
                            <option value="iPhone 12 Mini">iPhone 12 Mini</option>
                            <option value="iPhone 12 Pro">iPhone 12 Pro</option>
                            <option value="iPhone 12 Max">iPhone 12 Max</option>
                            <option value="iPhone 13">iPhone 13</option>
                            <option value="iPhone 13 Mini">iPhone 13 Mini</option>
                            <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                            <option value="iPhone 13 Max">iPhone 13 Max</option>
                            <option value="iPhone 14">iPhone 14</option>
                            <option value="iPhone 14 Plus">iPhone 14 Plus</option>
                            <option value="iPhone 15">iPhone 15</option>
                            <option value="iPhone 15 Plus">iPhone 15 Plus</option>
                            <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                            <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                        </select>
                    </div>

                    <div style={{justifyContent:'center', display: 'flex' ,marginTop:30}}>
                    <div id='check1' style={{ width: 200}}>
                        <div>
                            <label htmlFor="mangHinh">Màng hình</label>
                            <input
                                type="checkbox"
                                name="mangHinh"
                                id="mangHinh"
                                checked={mangHinhChecked}
                                onChange={(e) => setMangHinhChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="pin">Pin</label>
                            <input
                                type="checkbox"
                                name="pin"
                                id="pin"
                                checked={pinChecked}
                                onChange={(e) => setPinChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="rung">Rung</label>
                            <input
                                type="checkbox"
                                name="rung"
                                id="rung"
                                checked={rungChecked}
                                onChange={(e) => setRungChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="camTruoc">Cam trước</label>
                            <input
                                type="checkbox"
                                name="camTruoc"
                                id="camTruoc"
                                checked={camTruocChecked}
                                onChange={(e) => setCamTruocChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="camSau">Cam sau</label>
                            <input
                                type="checkbox"
                                name="camSau"
                                id="camSau"
                                checked={camSauChecked}
                                onChange={(e) => setCamSauChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="loa">Loa</label>
                            <input
                                type="checkbox"
                                name="loa"
                                id="loa"
                                checked={loaChecked}
                                onChange={(e) => setLoaChecked(e.target.checked)}
                            />
                        </div>
                    </div>

                    <div id='check2' style={{ width: 200 }}>
                        <div>
                            <label htmlFor="vo">Vỏ</label>
                            <input
                                type="checkbox"
                                name="vo"
                                id="vo"
                                checked={voChecked}
                                onChange={(e) => setVoChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="lung">Lưng</label>
                            <input
                                type="checkbox"
                                name="lung"
                                id="lung"
                                checked={lungChecked}
                                onChange={(e) => setLungChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="kinh">Kính</label>
                            <input
                                type="checkbox"
                                name="kinh"
                                id="kinh"
                                checked={kinhChecked}
                                onChange={(e) => setKinhChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="nutHome">Nút home</label>
                            <input
                                type="checkbox"
                                name="nutHome"
                                id="nutHome"
                                checked={nutHomeChecked}
                                onChange={(e) => setNutHomeChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="khaySim">Khay sim</label>
                            <input
                                type="checkbox"
                                name="khaySim"
                                id="khaySim"
                                checked={khaySimChecked}
                                onChange={(e) => setKhaySimChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="chanSac">Chân sạc</label>
                            <input
                                type="checkbox"
                                name="chanSac"
                                id="chanSac"
                                checked={chanSacChecked}
                                onChange={(e) => setChanSacChecked(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>

                    <button type="button" onClick={handleCost}>Tính tiền</button>
                    <button type="submit" >Lưu thông tin</button>
                    <label htmlFor="">{repairCost}</label>

            </form>
        </div>
    )

}

export default Repair;