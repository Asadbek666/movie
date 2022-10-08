import React from 'react';
import './Header.css';
import img from '../../images/tv.png';
import poster2 from '../../images/Posterr.jpg';
import poster3 from '../../images/Poster3.jpg';
import poster4 from '../../images/Poster4.jpg';
import status from '../../images/status.png';
import strawbery from '../../images/strawbery.png';
import { useState, useEffect } from 'react';

const Header = (props) => {
    const [ moviee, setMoviee ] = useState(props.data);
    const [ movie, setMovie ] = useState();
    console.log(props.ikValue);
    let value = props.ikValue;
    let setValue = props.setValue
    // setMovie(props.data.slice(0,500)); 
    console.log(value);
    const [menu, setMenu] = useState(false)
    const [num, setNum] = useState(1)

    // useEffect(() => {
    //     setInterval(() => {
    //         if(num < 4){
    //             setNum( () =>  num + 1 )
    //         } else if(num == 4) {
    //             setNum( () => 1)
    //         }
    //     },5000)
    //     console.log(num);
    // })

    const heartChange = (e) => {
        setMoviee(moviee.map((item) => {
            if(item.id == e.target.id){ item.status = false }
            return item
         }))
        // setMoviee(movie)
    }
    return (
        <div style={num === 2 ? {backgroundImage: `url(${poster2})`, zIndex: '999', opacity: '1'} : num === 3 ? {backgroundImage: `url(${poster3})`, zIndex: '999', opacity: '1'} : num === 4 ? {backgroundImage: `url(${poster4})`, zIndex: '999', opacity: '1'} : {overflow: 'hidden'}} className="Header" >
            <div className="container">
                <nav>
                    <div className="navbarigo">
                        <div className="nav__row">
                            <div className="nav__logo">
                                <div className="logo_img"><a href="#"><img src={img} alt="logo" /></a></div>
                                <div className="logo">MovieBox</div>
                            </div>
                            <div className="nav__search">
                                <div className="nav__search__row">
                                    <input type="search" className="search" placeholder="What do you want to watch?"/>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="nav__menu">
                                <div className="signIn">Sign in</div>
                                <div onClick={() => setMenu(!menu)} className="menu">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={menu === true ? 'sideBarChange' : 'sidebar'} className="sideBar">
                        <div className="sideBar__row">
                            <div className="sideBar__head">Your Wishlists</div>
                            <div onClick={() => setMenu(!menu)} className="sideBar__icons">
                                <span className="sideBar1"></span>
                                <span className="sideBar2"></span>
                            </div>
                        </div>
                        {
                            moviee && moviee.map((item, index) => {
                                if( item.status == true) {
                                    return (
                                        <div key={index} className="slider__card">
                                            <div className="slider__card__header">
                                                <i id={item.id} style={item.status == true ? {color: '#be123c'} : {color: '#D1D5DB'}} onClick={(e) => heartChange(e)} className="fa-solid fa-heart heart"></i>
                                                <a href={ 'https://www.youtube.com/watch?v='+item.ytid}>
                                                    <img src={'https://img.youtube.com/vi/'+item.ytid+'/mqdefault.jpg'} alt="" />
                                                </a>
                                            </div>
                                            <div className="slider__card__body">
                                                <div className='slider__card__modal'>
                                                    <div className='slider__card__year'>USA, {item.movie_year} - Current</div>
                                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#exampleModal"+item.id}>
                                                        More
                                                    </button>
                                                </div>
                                                <div className='slider__card__title'>{item.Title}</div>
                                                <div className='slider__card__status'>
                                                    <div className="card__left__status">
                                                        <img src={status} alt="status" /> 
                                                        <div className="card__left__status__title">{item.imdb_rating}</div>
                                                    </div>
                                                    <div className="card__right__status">
                                                        <img src={strawbery} alt="status" /> 
                                                        <div className="card__right__status__title">{item.runtime}%</div>
                                                    </div>
                                                </div>
                                                <div className='slider__card__subtitle'>{item.Categories}</div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                   console.log("Hello"); 
                                }
                            })
                            // movie && movie.map((item, index) => {
                            //     if(item.status == true) {
                            //         return (
                            //             <div key={index} className="slider__card">
                            //                 <div className="slider__card__header">
                            //                     <i style={item.status == true ? {color: '#be123c'} : {color: '#D1D5DB'}} onClick={() => setValue(item.status = false)} className="fa-solid fa-heart heart"></i>
                            //                     <a href={ 'https://www.youtube.com/watch?v='+item.ytid}>
                            //                         <img src={'https://img.youtube.com/vi/'+item.ytid+'/mqdefault.jpg'} alt="" />
                            //                     </a>
                            //                 </div>
                            //                 <div className="slider__card__body">
                            //                     <div className='slider__card__modal'>
                            //                         <div className='slider__card__year'>USA, {item.movie_year} - Current</div>
                            //                         <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#exampleModal"+item.id}>
                            //                             More
                            //                         </button>
                            //                     </div>
                            //                     <div className='slider__card__title'>{item.Title}</div>
                            //                     <div className='slider__card__status'>
                            //                         <div className="card__left__status">
                            //                             <img src={status} alt="status" /> 
                            //                             <div className="card__left__status__title">{item.imdb_rating}</div>
                            //                         </div>
                            //                         <div className="card__right__status">
                            //                             <img src={strawbery} alt="status" /> 
                            //                             <div className="card__right__status__title">{item.runtime}%</div>
                            //                         </div>
                            //                     </div>
                            //                     <div className='slider__card__subtitle'>{item.Categories}</div>
                            //                 </div>
                            //             </div>
                            //         )
                            //     }
                            // })
                        }
                    </div>
                </nav>
                <div className="Header__title">
                    <div className="title__row">

                        <div id={num === 1 ? 'work' : 'none'} className="title__card">
                            <div className="card__title">John Wick 3 : Parabellum</div>
                            <div className="card__status">
                                <div className="left__sttus">
                                    <img className='im0b' src={status} alt="card__status" />
                                    <div className="title__status">86.0 / 100</div>
                                </div>
                                <div className="right__sttus">
                                    <img className='pomato' src={strawbery} alt="card__strawbery" />
                                    <div className="title__strawbery">97%</div>
                                </div>
                            </div>
                            <div className="card__paragraph first_card">
                                <div className="paragraph">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</div>
                            </div>
                            <div className="card__btn">
                                <a className="card__wrap" href="https://youtu.be/M7XM597XO94">
                                    <i className="fa-solid fa-circle-play"></i>
                                    <div className="btn__title">Watch trailer</div>
                                </a>
                            </div>
                        </div>

                        <div id={num === 2 ? 'work' : 'none'} className="title__card">
                            <div className="card__title">BULLETRAN</div>
                            <div className="card__status">
                                <div className="left__sttus">
                                    <img src={status} alt="card__status" />
                                    <div className="title__status">77.0 / 95</div>
                                </div>
                                <div className="right__sttus">
                                    <img src={strawbery} alt="card__strawbery" />
                                    <div className="title__strawbery">90%</div>
                                </div>
                            </div>
                            <div className="card__paragraph">
                                <div className="paragraph">An original movie event, Bullet Train is a fun, delirious action-thriller from the director of Deadpool 2, David Leitch. Brad Pitt headlines an ensemble cast of eclectic, diverse assassins – all with connected yet conflicting objectives – set against the backdrop of a non-stop ride through modern-day Japan.</div>
                            </div>
                            <div className="card__btn">
                                <a className="card__wrap" href="https://youtu.be/M7XM597XO94">
                                    <i className="fa-solid fa-circle-play"></i>
                                    <div className="btn__title">Watch trailer</div>
                                </a>
                            </div>
                        </div>
                        
                        <div id={num === 3 ? 'work' : 'none'} className="title__card">
                            <div className="card__title">SCREAM</div>
                            <div className="card__status">
                                <div className="left__sttus">
                                    <img className='im0b' src={status} alt="card__status" />
                                    <div className="title__status">86.0 / 100</div>
                                </div>
                                <div className="right__sttus">
                                    <img src={strawbery} alt="card__strawbery" />
                                    <div className="title__strawbery">90%</div>
                                </div>
                            </div>
                            <div className="card__paragraph">
                                <div className="paragraph">Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.</div>
                            </div>
                            <div className="card__btn">
                                <a className="card__wrap" href="https://youtu.be/M7XM597XO94">
                                    <i className="fa-solid fa-circle-play"></i>
                                    <div className="btn__title">Watch trailer</div>
                                </a>
                            </div>
                        </div>
                        
                        <div id={num === 4 ? 'work' : 'none'} className="title__card">
                            <div className="card__title">Pursuit of Happyness</div>
                            <div className="card__status">
                                <div className="left__sttus">
                                    <img src={status} alt="card__status" />
                                    <div className="title__status">86.0 / 100</div>
                                </div>
                                <div className="right__sttus">
                                    <img src={strawbery} alt="card__strawbery" />
                                    <div className="title__strawbery">90%</div>
                                </div>
                            </div>
                            <div className="card__paragraph">
                                <div className="paragraph">Starring: Will Smith, Thandie Newton, Jaden Smith The Pursuit of Happyness (2006) Official Trailer 1 - Will Smith Movie A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.</div>
                            </div>
                            <div className="card__btn">
                                <a className="card__wrap" href="https://youtu.be/M7XM597XO94">
                                    <i className="fa-solid fa-circle-play"></i>
                                    <div className="btn__title">Watch trailer</div>
                                </a>
                            </div>
                        </div>

                        

                    </div>
                </div>
                <div className="Header__numbers">
                    <div className="numbers__row">
                        <div onClick={() => setNum(1)} id={num === 1 ? 'number__line' : 'pr'} className="header__numbers">1</div>
                        <div onClick={() => setNum(2)} id={num === 2 ? 'number__line' : 'pr'} className="header__numbers">2</div>
                        <div onClick={() => setNum(3)} id={num === 3 ? 'number__line' : 'pr'} className="header__numbers">3</div>
                        <div onClick={() => setNum(4)} id={num === 4 ? 'number__line' : 'pr'} className="header__numbers">4</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;