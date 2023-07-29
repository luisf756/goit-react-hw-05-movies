import s from './ListOfMovie.module.css';

export default function MoviesList({children}) {
    return <ul className={s.gallery}>
        {children}
    </ul>
}