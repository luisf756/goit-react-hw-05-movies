import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/fech.api';
// import ReactReadMoreReadLess from 'react-read-more-read-less';

import s from './Reviews.module.css';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    // const test = <span class="iconify" data-icon="icomoon-free:arrow-down2"></span>;

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then(data => {
                setReviews(data.results);
            })
    }, [movieId])

    function avatarHandler(avatar) {
        return avatar.includes("https")
            ? avatar.substring(1)
            : `https://image.tmdb.org/t/p/w500${avatar}`
    }

    return <>
        {reviews.length > 0
            ? (<ul className={s.reviews}>
                { reviews.map(({ id, author, content, author_details,created_at }) => (
                    <li className={s.reviews__item} key={id}>
                        <div className={s.author_info}>
                            {author_details.avatar_path
                                ? <img src={avatarHandler(author_details.avatar_path)} alt={author} className={s.avatar} />
                                : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={author} className={s.avatar} />
                            }
                            <div>
                                <h4 className={s.author}>{author}</h4>
                                <p className={s.date}>{new Date(created_at).toLocaleString("en-US", options)}</p>
                            </div>
                        </div>
                        
                        <div className={s.opinionUSer}>

                        {/* <ReactReadMoreReadLess
                            charLimit={300}
                            className={s.read_more_content}
                            readMoreText={"Read more ▼"}
                            readLessText={"Hide ▲"}
                            readMoreClassName={s.read_more_less__more}
                            readLessClassName={s.read_more_less__less}
                            >
                                {content}
                        </ReactReadMoreReadLess> */}

                        </div>

                        <div className={s.interactive}>
                            <svg  viewBox="0 0 31 30">
                                <path className={s.iconheart} fill=''  d="M16.042 8.345c0 0-2-4.262-6.5-4.262-4.917 0-7.5 4.167-7.5 8.333 0 6.917 14 15.5 14 15.5s13.916-8.5 13.916-15.5c0-4.25-2.666-8.333-7.416-8.333s-6.5 4.262-6.5 4.262z"></path>
                            </svg>
                            <svg className={s.sv2} viewBox="0 0 25 21">
                                <path className={s.iconmessage} fill='' d="M22 15v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-14c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.256 0.098 0.512 0.293 0.707 0.391 0.391 1.024 0.391 1.414 0l3.707-3.707h11.586c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM20 15c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.526 0.112-0.707 0.293l-2.293 2.293v-13.586c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path>
                            </svg>

                            <svg className={s.iconshare} viewBox="0 0 41 31">
                                    <path d="M27 22c-1.411 0-2.685 0.586-3.594 1.526l-13.469-6.734c0.041-0.258 0.063-0.522 0.063-0.791s-0.022-0.534-0.063-0.791l13.469-6.734c0.909 0.94 2.183 1.526 3.594 1.526 2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5c0 0.269 0.022 0.534 0.063 0.791l-13.469 6.734c-0.909-0.94-2.183-1.526-3.594-1.526-2.761 0-5 2.239-5 5s2.239 5 5 5c1.411 0 2.685-0.586 3.594-1.526l13.469 6.734c-0.041 0.258-0.063 0.522-0.063 0.791 0 2.761 2.239 5 5 5s5-2.239 5-5c0-2.761-2.239-5-5-5z"></path>
                            </svg>
                        </div>
                    </li>
                ))}
            </ul>)
            : <p className={s.contentR}>We don't have any reviews for this movie</p>
        }
        </>
    }