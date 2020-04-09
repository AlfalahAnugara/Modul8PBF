import React, { Component } from 'react';
import './BlogPost.css';
import Post from '../../component/BlogPost/Post';

class BlogPost extends Component {
    url = "http://localhost:3001/posts";

    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body:""
        }
    }

    ambilDataDariAPI = () => {
        fetch(this.url).then(response => response.json()).then(jsonresultAPI => {
            this.setState({ listArtikel: jsonresultAPI })
        })
    }

    componentDidMount(){
        this.ambilDataDariAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`${this.url}/${data}`,{
            method: 'DELETE'
        }).then(res => {
            this.ambilDataDariAPI();
        })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({ insertArtikel: formInsertArtikel});
    }

    handleTombolSimpan = () => {
        fetch(this.url,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.insertArtikel)
        }).then((Response) => {
            this.ambilDataDariAPI();
        })
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" className="form-control" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => { // looping data dari API
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} />
                    // menampilkan data JSON api
                    })
                }
            </div>
        )
    }
}

export default BlogPost;