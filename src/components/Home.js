import React, {Component} from 'react';
import biotaf from '../images/biotaf.png';

export default class Home extends Component {
    render(){
        return (
        	<div>
			    <div id="header" className="header">
			        <div className="header-content">
			            <div className="container">
			                <div className="row">
			                    <div className="col-lg-6">
			                        <div className="text-container">
			                            <h1><span className="turquoise">Biotaff</span> Website produk</h1>
			                            <p className="p-large">Biotaff adalah produk baru buatan alqolam, yang bisa membersihkan segalanya. apa aja bisa di bersihkan</p>
			                            <a className="btn-solid-lg page-scroll" href="https://alqolam.com">Beli Produknya</a>
			                        </div>
			                    </div>
			                    <div className="col-lg-6">
			                        <div className="image-container">
			                            <img className="img-fluid" src={biotaf} alt="alternative"/>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div id="services" className="cards-1">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12">
			                    <h2>Kegunaan Biotaff</h2>
			                    <p className="p-heading p-large">ini adalah kegunaan biotaff yang tidak terduga, ya di tulis aja biar panjang</p>
			                </div>
			            </div>
			            <div className="row">
			                <div className="col-lg-12">
			                    <div className="card">
			                        <img className="card-image" src="images/undraw_healthy_lifestyle_6tyl.svg" alt="alternative"/>
			                        <div className="card-body">
			                            <h4 className="card-title">Bersihin Kamar mandi</h4>
			                            <p>Ini gambarnya di ganti tentang bersihin kamar mandi, kalo bisa gambarnya icon biru kek gitu juga ya</p>
			                        </div>
			                    </div>
			                    <div className="card">
			                        <img className="card-image" src="images/undraw_healthy_lifestyle_6tyl.svg" alt="alternative"/>
			                        <div className="card-body">
			                            <h4 className="card-title">Bersihin yang Mampet</h4>
			                            <p>Ini gambarnya di ganti tentang bersihin kamar mandi, kalo bisa gambarnya icon biru kek gitu juga ya</p>
			                        </div>
			                    </div>
			                    <div className="card">
			                        <img className="card-image" src="images/undraw_healthy_lifestyle_6tyl.svg" alt="alternative"/>
			                        <div className="card-body">
			                            <h4 className="card-title">Mengharumkan WC</h4>
			                            <p>Ini gambarnya di ganti tentang bersihin kamar mandi, kalo bisa gambarnya icon biru kek gitu juga ya</p>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="basic-1">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-6">
			                    <div className="text-container">
			                        <h2>Kegunaan Biotaff</h2>
			                        <p>Ini kegunaan Biotaff, yang tidak di ketahui oleh siapa pun</p>
			                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">Lihat Produk</a>
			                    </div>
			                </div>
			                <div className="col-lg-6">
			                    <div className="image-container">
			                        <img className="img-fluid" src="images/biotaf.png" alt="alternative"/>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="basic-3">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12">
			                    <h2>Ini video Tutorial penggunaan Impressa</h2>
			                </div>
			            </div>
			            <div className="row">
			                <div className="col-lg-12">
			                    
			                    <div className="image-container">
			                        <div className="video-wrapper">
			                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
			                                <img className="img-fluid" src="images/video-frame.svg" alt="alternative"/>
			                                <span className="video-play-button">
			                                    <span></span>
			                                </span>
			                            </a>
			                        </div> 
			                    </div>

			                    <p>Video ini akan menampilkan tutorial penggunaan biotaff dalam kehidupan sehari-hari</p>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="slider-2">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-6">
			                    <div className="image-container">
			                        <img className="img-fluid" src="images/details-1-office-worker.svg" alt="alternative"/>
			                    </div>
			                </div>
			                <div className="col-lg-6">
			                    <h2>Testimoni pengguna Biotaff</h2>
			                    <div className="slider-container">
			                        <div className="swiper-container card-slider">
			                            <div className="swiper-wrapper">
			                                <div className="swiper-slide">
			                                    <div className="card">
			                                        <img className="card-image" src="images/testimonial-1.svg" alt="alternative"/>
			                                        <div className="card-body">
			                                            <p className="testimonial-text">Biotaff sangat bagus karna dia di jual oleh alqolam, barang alqolam pasti bagus</p>
			                                            <p className="testimonial-author">Apri - Kang ketik kodingan</p>
			                                        </div>
			                                    </div>
			                                </div>
			                                <div className="swiper-slide">
			                                    <div className="card">
			                                        <img className="card-image" src="images/testimonial-2.svg" alt="alternative"/>
			                                        <div className="card-body">
			                                            <p className="testimonial-text">Biotaff itu adalah alat yang digunakan ketika mampet, bukan ketika lancar. udah gitu aja</p>
			                                            <p className="testimonial-author">Angga - Kang service komputer</p>
			                                        </div>
			                                    </div>        
			                                </div>
			                                <div className="swiper-slide">
			                                    <div className="card">
			                                        <img className="card-image" src="images/testimonial-3.svg" alt="alternative"/>
			                                        <div className="card-body">
			                                            <p className="testimonial-text">Biotaff membantu saya, hayo tebak bantu apa?</p>
			                                            <p className="testimonial-author">Andi - Mandor Kodingan</p>
			                                        </div>
			                                    </div>        
			                                </div>
			                            </div>
			                            <div className="swiper-button-next"></div>
			                            <div className="swiper-button-prev"></div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
		    </div>
        )
    }
}