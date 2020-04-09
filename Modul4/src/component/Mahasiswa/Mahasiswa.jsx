import React from 'react';

const Mahasiswa = (props) => {
    return (
        <div class="list-group mt-3">
            <div className="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{props.nama}</h5>
                </div>
                <p class="mb-1">NIM : {props.nim}<br />Alamat : {props.alamat}<br /> Telp : {props.telp}<br />Angkatan : {props.angkatan}<br /> Status : {props.status}<br /></p>
                <button className="btn btn-sm btn-danger" onClick={() => props.handleDeleteMahasiswa(props.id)}>Hapus Data</button>
            </div>
        </div>
    )
}

export default Mahasiswa;