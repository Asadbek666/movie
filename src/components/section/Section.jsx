import React from 'react';
import { useRef } from 'react';
import status from '../../images/status.png';
import strawbery from '../../images/strawbery.png';
import keanu from '../../images/keanu.png';
import ryan from '../../images/ryan.png';
import timot from '../../images/timot.png';
import moretz from '../../images/moretz.png';
// import data from '../data/movies';
import './Section.css';
import Modal from '../modal/Modal';
import { useState } from 'react';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';

const Section = (props) => {
    let movie = props.data
    let setValue = props.setValue
    let datta3 = movie.slice(90,120);
    const data = movie.slice(23,33);
    const data2 = movie.slice(50,80);
    let count = 0;
    const work = useRef();
    const work2 = useRef();

    function swipe() {
        if(count > data.length -4) {
            count = 0;
        } else if (count < 0) {
            count = data.length - 4;
        }
        work.current.style.transform = `translateX(${-count * 332}px)` // 340
        console.log(work.current.style.transform);
    }

    const rightArrow = () => {
        count++;
       swipe()
    }
    const leftArrow = () => {
        count--;
        swipe()
    }

    let count2 = 0;
    function swipe2() {
        if(count2 > data2.length -4) {
            count2 = 0;
        } else if (count2 < 0) {
            count2 = data2.length - 4;
        }
        work2.current.style.transform = `translateX(${-count2 * 332}px)` // 340
        // console.log(work2.current.style.transform);
    }

    const rightArow = () => {
        count2++;
       swipe2()
    }
    const leftArow = () => {
        count2--;
        swipe2()
    }

    // Third Slider

    let count3 = 0;
    const work3 = useRef();

    function swipe3() {
        if(count3 > datta3.length -4) {
            count3 = 0;
        } else if (count3 < 0) {
            count3 = datta3.length - 4;
        }
        work3.current.style.transform = `translateX(${-count3 * 332}px)` // 340
        // console.log(work3.current.style.transform);
    }

    const leftArow3 = () => {
      count3--;
      swipe3()
  }
    const rightArow3 = () => {
        count3++;
       swipe3()
    }
    const [ change, setChange ] = useState(false);
    const test = (e) => {
        
        const id = e.target.id;
        setValue(e.target.id);

        movie.map(item => {
            if(item.id == id) {
                console.log(item.status == false ? item.status = true : item.status = false);
            }
        })
        setChange(!change);
    }
    return (
        <div className='Section'>
            <div className="container">
                <div className="input_navbar">
                    <div className='inputnav_'>
                        <Input placeholder='Search'></Input>
                    </div>
                    <div className='inputnav_'>
                        <select name="All" id="All" className='form-select category-select select'>
                            <option value="1">All</option>
                            <option value="triller">Uncategorized</option>
                            <option value="triller">Documentary</option>
                            <option value="triller">Music</option>
                            <option value="triller">Adventure</option>
                            <option value="triller">Animation</option>
                            <option value="triller">Comedy</option>
                            <option value="triller">Family</option>
                            <option value="triller">Fantasy</option>
                            <option value="triller">Horror</option>
                            <option value="triller">Drama</option>
                            <option value="triller">Animation</option>
                            <option value="triller">Comedy</option>
                            <option value="triller">Family</option>
                            <option value="triller">Sports</option>
                            <option value="triller">Adventure</option>                    
                        </select>
                    </div>
            <div className='inputnav_'>
                <Input type='number' placeholder='From year'></Input>
            </div>
            <div className='inputnav_'>
                <Input type='number' placeholder='To year'></Input>
            </div>
            <div className='inputnav_'>
                <Button color='danger'>Search</Button>
            </div>
        </div>

                {
                    data && data.map(item => (
                        <Modal item={item} id={item.id} />
                    ))
                }
                {
                    data2 && data2.map(item => (
                        <Modal item={item} id={item.id} />
                    ))
                }
                

                <div className="section__title">
                    <div className="section__title__row">
                        <div className='section__first__title'>Featured Movie</div>
                        <div className='section__first__more'><a href="#">See more <i className="fa-solid fa-chevron-right"></i> </a></div>
                    </div>
                </div>
                <div className="wrap">
                        <i onClick={leftArrow} className="fa-solid fa-chevron-left leftArrow"></i>
                        <i onClick={rightArrow} className="fa-solid fa-chevron-right rightArrow"></i>

                    <div className="section__first__slider">
                        <div ref={work} className="slider__wraper">
                            {
                                data && data.map((item,index) => {

                                 return (
                                    <div key={index} className="slider__card" data-aos="zoom-out-left">
                                        <div className="slider__card__header">
                                            <i id={item.id}  style={item.status == true ? {color: '#be123c'} : {color: '#D1D5DB'}} onClick={(e) => test(e)} className="fa-solid fa-heart heart"></i>
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
                                )})
                            }

                        </div>
                    </div>
                </div>

                {/* Second Slider */}

                <div className="section__title two">
                    <div className="section__title__row">
                        <div className='section__first__title'> New Arrival </div>
                        <div className='section__first__more'><a href="#">See more <i className="fa-solid fa-chevron-right"></i> </a></div>
                    </div>
                </div>
                <div className="wrap">
                        <i onClick={leftArow} className="fa-solid fa-chevron-left leftArrow"></i>
                        <i onClick={rightArow} className="fa-solid fa-chevron-right rightArrow"></i>

                    <div className="section__first__slider">
                        <div ref={work2} className="slider__wraper">

                            {
                                data2 && data2.map((item,index) => (
                                    <div key={index} className="slider__card" data-aos="zoom-out-right">
                                        <div className="slider__card__header">
                                            <i id={item.id}  style={item.status == true ? {color: '#be123c'} : console.log('')} onClick={(e) => test(e)} className="fa-solid fa-heart heart"></i>
                                            <a href={'https://www.youtube.com/watch?v='+item.ytid}>
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
                                ))
                            }

                        </div>
                    </div>
                </div>

                {/* Third Slider */}

                <div className="section__title two">
                    <div className="section__title__row">
                        <div className='section__first__title'> Exclusive Videos </div>
                        <div className='section__first__more'><a href="#">See more <i className="fa-solid fa-chevron-right"></i> </a></div>
                    </div>
                </div>
                <div className="wrap">
                        <i onClick={leftArow3} className="fa-solid fa-chevron-left leftArrow"></i>
                        <i onClick={rightArow3} className="fa-solid fa-chevron-right rightArrow"></i>

                    <div className="section__first__slider">
                        <div ref={work3} className="slider__wraper">

                            {
                               datta3 && datta3.map((item,index) => (
                                    <div key={index} className="slider__card slider__third" data-aos="zoom-in">
                                        <div className="slider__card__header">
                                            <i className="fa-solid fa-heart heart"></i>
                                            <iframe width="300" height="300" src={"https://www.youtube.com/embed/"+item.ytid} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                
                {/* Fourth Slider */}

                <div className="section__title two">
                    <div className="section__title__row">
                        <div className='section__first__title'> Featured Casts </div>
                        <div className='section__first__more'><a href="#">See more <i className="fa-solid fa-chevron-right"></i> </a></div>
                    </div>
                </div>
                <div className="last__wraper__card">
                    <div className="last__card" data-aos="zoom-in"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="3000">
                        <div className="last__img">
                            <a href="https://www.themoviedb.org/person/6384-keanu-reeves">
                                <img src={keanu} alt="" />
                            </a>
                        </div>
                        <div className="last__body">
                            <div className="t">Keanu Reeves</div>
                        </div>
                    </div>
                    <div className="last__card" data-aos="zoom-in"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="3000">
                        <div className="last__img">
                            <a href="https://www.themoviedb.org/person/10859-ryan-reynolds">
                                <img src={ryan} alt="" />
                            </a>
                        </div>
                        <div className="last__body">
                            <div className="t">Ryan Reynolds</div>
                        </div>
                    </div>
                    <div className="last__card" data-aos="zoom-in"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="3000">
                        <div className="last__img">
                            <a href="https://www.themoviedb.org/person/1190668-timothee-chalamet">
                                <img src={timot} alt="" />
                            </a>
                        </div>
                        <div className="last__body">
                            <div className="t">Timothée Chalamet</div>
                        </div>
                    </div>
                    <div className="last__card" data-aos="zoom-in"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="3000">
                        <div className="last__img">
                            <a href="https://www.themoviedb.org/person/56734-chlo-grace-moretz">
                                <img src={moretz} alt="" />
                            </a>
                        </div>
                        <div className="last__body">
                            <div className="t">Chloë Grace Moretz</div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
};


export default Section;