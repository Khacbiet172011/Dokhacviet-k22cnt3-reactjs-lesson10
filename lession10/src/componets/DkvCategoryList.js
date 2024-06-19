import React from 'react'

export default function DkvCategoryList({ renderDkvCateGories, onAddNew }) {
    console.log("renderDkvCategories: ", renderDkvCateGories);
    let DkvCategoryElement = renderDkvCateGories.map((DkvCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{DkvCategory.DkvId}</td>
                <td>{DkvCategory.DkvCategoryName}</td>
                <td>{DkvCategory.DkvCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })

    const DkvHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {DkvCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={DkvHandleAdd}>Them moi</button>
        </div>
    )
}