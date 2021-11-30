import React, { useEffect, useState } from 'react'
import './assets/css/veriables.css';
import './assets/css/app.css';
import './assets/css/buy.css';
import './assets/css/navbar.css';
import 'antd/dist/antd.css';
import './assets/css/responsive.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import CreateCollectibleSingle from './Pages/CreateCollectibleSingle';
import CreateCollectibleMulti from './Pages/CreateCollectibleMulti';
import Profile from './Pages/Profile';
import Faq from './Pages/Faq';
import CreateCollectibleEdit from './Pages/CreateCollectibleEdit';
import CreateCollectible from './Pages/CreateCollectible';
import CollectibleMultiInfo from './Pages/CollectibleMultiInfo';
import CollectibleMultiSecond from './Pages/CollectibleMultiSecond';
import SignIn from './Pages/SignIn';
import Token from './Pages/Token';
import Activity from './Pages/Activity';
import Following from './Pages/Following';
import search from './Pages/search';

import FullScreenImage from './Components/Popup/FullScreenImage';
import CreateCollectibleMultiplePopup from './Components/Popup/CreateCollectibleMultiplePopup';
import FinishedCollectiblePopup from './Components/Popup/FinishedCollectiblePopup';
import PlaceABidPopup from './Components/Popup/PlaceABidPopup';
import PlaceABidFollowPopup from './Components/Popup/PlaceABidFollowPopup';
import CoinConverPopup from './Components/Popup/CoinConverPopup';


import 'swiper/swiper-bundle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/Following" component={Following} exact />
                    <Route path="/SignIn" component={SignIn} exact />
                    <Route path="/Token" component={Token} exact />
                    <Route path="/Activity" component={Activity} exact />
                    <Route path="/CollectibleMultiInfo" component={CollectibleMultiInfo} exact />
                    <Route path="/CollectibleMultiSecond" component={CollectibleMultiSecond} exact />
                    <Route path="/CreateCollectible" component={CreateCollectible} exact />
                    <Route path="/CreateCollectibleEdit" component={CreateCollectibleEdit} exact />
                    <Route path="/CreateCollectibleMulti" component={CreateCollectibleMulti} exact />
                    <Route path="/CreateCollectibleSingle" component={CreateCollectibleSingle} exact />
                    <Route path="/Faq" component={Faq} exact />
                    <Route path="/Profile" component={Profile} exact />
                    <Route path="/search" component={search} exact />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App
