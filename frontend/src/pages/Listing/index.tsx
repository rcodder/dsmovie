import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)//erro no console???
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    /*
    //erro no console???
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number); //não carregou o número da página na "tela"
        });
    */

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(movie =>
                    (//erro, não listou nada!!!
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;