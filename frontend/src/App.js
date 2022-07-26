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

// const pageNotFound_404  = lazy(() => import('./components/pageNotFound_404'))

const antIcon = <LoadingOutlined style={{ fontSize: 150, color: 'white' }} spin />;

const loadingScreen = (
    <div className={`fixed grid justify-center items-center h-screen w-screen bg-gradient-to-b from-[#0d0735] to-[#070515]`}>
        <div className='space-y-5 top-1/2'>
            <Spin indicator={antIcon} />
        </div>
    </div>
)

const App = () => {
    return (
        <React.Fragment>
            <Suspense fallback={loadingScreen}>
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
                        {/* <Route component={pageNotFound_404} /> */}
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