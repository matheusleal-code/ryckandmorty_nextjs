import Character from '../../components/character/index'
import styles from './styles.module.css'
import { faTimes, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

function Characters() {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [searchCharacter, setSearchCharacter] = useState()
    const [error, setError] = useState();
    const [maxPage, setMaxPage] = useState();

    useEffect(() => {
        setLoading(true)
        api.get(`character?page=${pageNumber}`)
            .then((response) => [setCharacters(response.data.results), setMaxPage(response.data.info.count)])
            .then(() => setLoading(false))
    }, [pageNumber])

    useEffect(() => {
        if (searchCharacter) {
            api.get(`character?name=${searchCharacter}`)
                .then((response) => [setCharacters(response.data.results), setMaxPage(response.data.info.count)])
                .then(() => setError(''))
                .catch(() => {
                    setCharacters([]);
                    setMaxPage()
                    setError('Nenhum Resultado Encontrado')
                })
        } else {
            api.get(`character?page=${pageNumber}`)
                .then((response) => [setCharacters(response.data.results), setMaxPage(response.data.info.count)])
        }
    }, [searchCharacter])

    return (
        <div>
            {!loading &&
                <div className={styles.container}>
                    <div className={styles.search}>
                        <div className={styles.searchContainer}>
                            <div className={styles.searchItens}>
                                <input id="name" name="name" type="text" value={searchCharacter || ''} autoComplete="name" required placeholder="Search for a Character" onChange={event => setSearchCharacter(event.target.value)} />
                                <button onClick={() => setSearchCharacter('')}><FontAwesomeIcon icon={faTimes} className={styles.iconClose} /></button>
                            </div>
                        </div>
                    </div>
                    {error &&
                        <div className={styles.containerError}>
                            <p>{error}</p>
                        </div>
                    }
                    <div className={styles.charactersContainer}>
                        {characters?.map(character => {
                            return (
                                <Character
                                    key={character.id}
                                    id={character.id}
                                    name={character.name}
                                    image={character.image}
                                    gender={character.gender}
                                    species={character.species}
                                    status={character.status}
                                    created={character.created}
                                    episode={character.episode}
                                    location={character.location}
                                    origin={character.origin}
                                    type={character.type}
                                    url={character.url}
                                />
                            )
                        })}
                    </div>
                    {characters && !searchCharacter &&
                        <div className={styles.containerChangePages}>
                            <button onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon></button>
                            <span>{pageNumber}/{maxPage}</span>
                            <button onClick={() => setPageNumber(pageNumber < maxPage ? pageNumber + 1 : pageNumber)}><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                        </div>
                    }
                </div>
            }
            {loading &&
                <div className={styles.containerLoader}>
                    <div>
                        <ClipLoader
                            size={100}
                            loading={true}
                            color={'grey'}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default Characters