import React from 'react';
import status from '../../images/status.png';
import strawbery from '../../images/strawbery.png';

const Modal = ({item,id}) => {
    return (
        <div className='Modal'>
            <div className="container">
               

                    <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 style={{color: '#BE123C'}} className="modal-title" id="exampleModalLabel">Movie Description</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body ">
                            <div className="slider__card w-100">
                                        <div className="slider__card__header">
                                            <i className="fa-solid fa-heart heart"></i>
                                            <a href={ 'https://www.youtube.com/watch?v='+item.ytid}>
                                                <img src={'https://img.youtube.com/vi/'+item.ytid+'/mqdefault.jpg'} alt="" />
                                            </a>
                                        </div>
                                        <div className="slider__card__body">
                                            <div className='slider__card__modal'>
                                                <div className='slider__card__year'>USA, {item.movie_year} - Current</div>
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
                                {item.summary}
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};


export default Modal;