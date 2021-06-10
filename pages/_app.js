import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Footer from "../src/components/footer/Footer.js";
import Header from "../src/components/header/Header";
import Modal from "../src/components/Modal";
import PopUp from "../src/components/PopUp";
import "tailwindcss/tailwind.css";
import Head from "next/head";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    const [modalActive, setModalActive] = useState(false);
    const [city, setCity] = useState(null);
    const [favorites, setFavorites] = useState(
        () => Cookies.getJSON("favorites") || []
    );

    useEffect(() => {
        if (Cookies.getJSON("city") === void 0) {
            setModalActive(true);
        } else {
            setCity(Cookies.getJSON("city"));
        }
    }, []);

    useEffect(() => {
        if (city) {
            Cookies.set("city", city, { expires: 180 });
        }
    }, [city]);

    const toggleFavorites = (event, item) => {
        event.stopPropagation();
        const alreadyFavorite = favorites.indexOf(item.id) > -1;
        const newFavorites = alreadyFavorite
            ? favorites.filter((id) => id !== item.id)
            : [...favorites, item.id];
        setFavorites(newFavorites);
    };

    useEffect(() => {
        Cookies.set("favorites", JSON.stringify(favorites), {
            expires: 180,
        });
    }, [favorites]);

    return (
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <div className="font-sans">
                    <Header
                        city={city}
                        setCity={setCity}
                        favorites={favorites}
                    />
                    <Modal active={modalActive} setActive={setModalActive}>
                        <PopUp setActive={setModalActive} setCity={setCity} />
                    </Modal>
                    <Component
                        toggleFavorites={toggleFavorites}
                        favorites={favorites}
                        className="font-sans"
                        {...pageProps}
                    />
                    <Footer />
                </div>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </React.StrictMode>
    );
}

export default MyApp;

{
    /* <Switch>
<Route exact path="/" component={MainPage} />
<Route
    path="/categories/:id"
    component={() =>
        CategoryPage(toggleFavorites, favorites)
    }
/>
<Route
    path="/tags/:id"
    component={() =>
        TagsPage(toggleFavorites, favorites)
    }
/>
<Route
    path="/service/:id"
    component={() =>
        ServicePage(toggleFavorites, favorites)
    }
/>
<Route path="/politics" component={Politics} />
<Route
    path="/collaboration"
    component={Collaboration}
/>
<Route path="/contacts" component={Contacts} />
<Route path="/order/:id" component={OrderPage} />
<Route
    path="/favorites"
    component={() => (
        <Favorites
            toggleFavorites={toggleFavorites}
            favorites={favorites}
        />
    )}
/>
<Route
    path="/collaborationForm"
    component={CollaborationForm}
/>
<Route
    path="/services/:name"
    component={() =>
        SearchPage(toggleFavorites, favorites)
    }
/>
</Switch> */
}
