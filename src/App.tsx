import { Route, Routes } from 'react-router-dom'
import Layout from './components/screens/Layout'
import Main from './components/screens/main/main'
import Auth from './components/screens/auth/Auth'
import Register from './components/screens/register/Register'
import Profile from './components/screens/profile/profile'
import AccessDenied from './components/AccessDenied'
import Error from './components/screens/error'
import CreatePost from './components/screens/create-post/create-post'
import CreateCriterie from './components/create-criterie/create-criterie'
import CreateCategory from './components/create-category/create-category'
import PostPage from './components/screens/post-page/post-page'
import UpdatePostPage from './components/screens/post-page/update-post-page'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Main />} />
				<Route path='/post/:id' element={<PostPage />} />
				<Route path='/update/post/:id' element={<UpdatePostPage />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/register' element={<Register />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/create-post' element={<CreatePost />} />
				<Route path='/create-criterie' element={<CreateCriterie />} />
				<Route path='/create-category' element={<CreateCategory />} />
				<Route path='/accessdenied' element={<AccessDenied />} />
				<Route path='*' element={<Error />} />
			</Route>
		</Routes>
	)
}

export default App
