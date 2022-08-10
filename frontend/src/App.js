import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { log } from './components/base'

const Index = lazy(() => import('./pages/landPage'))
const Header = lazy(() => import('./components/header'))
const Footer = lazy(() => import('./components/footer'))
const ScrollToTop       = lazy(() => import('./components/scrollToTop'))
const About = lazy(() => import( './pages/about'))
const bookDetail = lazy(() => import( './pages/bookDetail'))
const Books = lazy(() => import('./pages/books'))
const aboutHadithProject = lazy(() => import( './pages/aboutHadithProject'))
const clips = lazy(() => import( './pages/clips'))
const album = lazy(() => import( './pages/album'))
const search = lazy(() => import( './pages/search.js'))
const pageNotFound_404  = lazy(() => import('./components/pageNotFound_404'))

const loadingScreen = () => {
    return (
        <div className={`
            fixed left-0 backdrop-blur-3xl backdrop-brightness-75
            top-0 w-screen h-screen z-20
            flex items-center justify-center
        `}>
            <div>
                <svg class="animate-spin h-10 w-10 m-10 text-[#d5ba91]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>    
            </div>
        </div>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Suspense fallback={loadingScreen()}>  
                <Router>
                    <ScrollToTop />
                    <Header />

                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/المؤلفات' exact component={Books} />
                        <Route path='/السیرة-الذاتیة' exact component={About} />
                        <Route path='/المؤلفات/:title' exact component={bookDetail} />
                        <Route path='/موسوعة-حدیث-أهل-البیت' exact component={aboutHadithProject} />
                        <Route path='/المحاضرات' exact component={clips} />
                        <Route path='/الصور' exact component={album} />
                        <Route path='/بحث' exact component={search} />

                        <Route path='/404/' exact component={pageNotFound_404} />
                        <Route component={pageNotFound_404} />
                    </Switch>

                    <Footer />
                </Router>
            </Suspense>
        </React.Fragment>
    );
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('markaz')
);