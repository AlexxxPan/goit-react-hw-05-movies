import { Routes, Route, Navigate, NavLink } from "react-router-dom"
import { lazy, Suspense } from "react"
import styles from './App.module.css'

const Home = lazy(() => import('components/HomePage/HomePage'))
const Movies = lazy(() => import('components/MoviesPage/MoviesPage'))
const MovieDetails = lazy(() => import('components/MovieDetailsPage/MovieDetailsPage'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Reviews = lazy(() => import('components/Reviews/Reviews'))


export const App = () => {
  return (
   <div className={styles.container}>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Home
        </NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Movies
        </NavLink>
      </nav>
        <Suspense fallback="loading...">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="/movies/:movieId/cast" element={<Cast />}/>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to='/' />} />
      </Routes>
        </Suspense>
   </div>
  );
};