import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from './pages/Home.jsx'
import Protector from './components/AuthLayout.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'
import AllPosts from'./pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element: (
          <Protector authentication={false}>
             <Login/>
          </Protector>
        )
      },
      {
        path:"/signup",
        element: (
          <Protector authentication={false}>
             <Signup/>
          </Protector>
        )
      },
      {
        path:"/all-posts",
        element: (
          <Protector authentication>
             <AllPosts/>
          </Protector>
        )
      },
      {
        path:"/add-posts",
        element: (
          <Protector authentication>
             <AddPost/>
          </Protector>
        )
      },
      {
        path:"/edit-posts/:slug",
        element: (
          <Protector authentication>
             <EditPost/>
          </Protector>
        )
      },
      {
        path:"/post/:slug",
        element: (
          <Protector authentication>
             <Post/>
          </Protector>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
