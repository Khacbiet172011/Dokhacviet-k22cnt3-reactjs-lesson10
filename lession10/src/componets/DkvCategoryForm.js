import React, { useState } from 'react';
import axios from '../api/DkvApi';

export default function DkvCategoryFrom({ onCloseForm, onCategorySubmit }) {
    const [DkvCategoryName, setDkvCategoryName] = useState("");
    const [DkvCategoryStatus, setDkvCategoryStatus] = useState(true);

    const DkvHandleClose = () => {
        onCloseForm(false);
    }

    const DkvHandleSubmit = async (event) => {
        event.preventDefault();
        let DkvCategory = {
            DkvId: 0,
            DkvCategoryName: DkvCategoryName,
            DkvCategoryStatus: DkvCategoryStatus
        };
        console.log("DkvCategory", DkvCategory);
        await axios.post("DkvCategory", DkvCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='DkvCategoryName'
                        value={DkvCategoryName}
                        onChange={(ev) => setDkvCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select
                        name='DkvCategoryStatus'
                        value={DkvCategoryStatus}
                        onChange={(ev) => setDkvCategoryStatus(ev.target.value === 'true')}
                        className='form-select'
                    >
                        <option value={true}>Hien thi</option>
                        <option value={false}>Tam khoa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={DkvHandleSubmit}>Thêm mới</button>
                <button className='btn btn-danger' onClick={DkvHandleClose}>Đóng</button>
            </form>
        </div>
    );
}