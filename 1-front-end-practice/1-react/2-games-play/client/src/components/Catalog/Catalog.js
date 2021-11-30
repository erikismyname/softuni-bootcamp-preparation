import CatalogGameCard from "./CatalogGameCard/CatalogGameCard.js";

const Catalog = () => {

    return (

        <section id="catalog-page">
            <h1>All Games</h1>
            <CatalogGameCard />
            <h3 class="no-articles">No articles yet</h3>
        </section>

    );

};

export default Catalog;