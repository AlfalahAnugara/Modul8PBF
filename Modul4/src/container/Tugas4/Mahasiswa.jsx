import React,{ Component} from 'react';

class Mahasiswa extends Component {

    url = "";

    state = {
        listMahasiswa : [],
        insertMahasiswa: {
            id:1,
            nim: "",
            nama: "",
            telp: "",
            alamat: "",
            angkatan: "",
            status: "",
        }
    }

    // Get data mahasiswa
    GetDataAPI = () => {
        fetch(this.url).then(response => response.json()).then(result => {
            this.setState({ listMahasiswa: result });
        })
    }

    componentDidMount = () => {
        this.GetDataAPI();
    }
    // delete mahasiswa
    handleDeleteMahasiswa = (data) => {
        fetch(`${this.url}/${data}`,{
            method: 'DELETE'
        }).then(res => {
            this.GetDataAPI();
        })
    }
    // add mahasiswa 
    handleAddMahasiswa = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({ insertArtikel: formInsertArtikel });
    }

    // button on submit
    handleButtonOnSave = () => {
        fetch(this.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        }).then((Response) => {
            this.GetDataAPI();
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <h3 className="mt-2">Tambah Mahasiswa</h3>
                        <div className="form-group">
                            <label htmlFor="nim">Nim</label>
                            <input className="form-control" type="text" name="nim" id="nim" onChange={this.handleAd}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nama">Nama</label>
                            <input className="form-control" type="text" name="nama" id="nama" onChange={this.handleAd}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="alamat">Alamat</label>
                            <input className="form-control" type="text" name="alamat" id="alamat" onChange={this.handleAd}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telp">Telepon</label>
                            <input className="form-control" type="text" name="telp" id="telp" onChange={this.handleAd}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="angkatan">Angkatan</label>
                            <input className="form-control" type="text" name="angkatan" id="angkatan" onChange={this.handleAd}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input className="form-control" type="text" name="status" id="status" onChange={this.handleAd}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-md btn-success">Tambah Data</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="mt-2">List Mahasiswa</h3>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default Mahasiswa;