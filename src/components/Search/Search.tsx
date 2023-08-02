import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

import classes from './Search.module.css';

type SearchProps = {
    loadUser: (username: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
    const [username, setUsername] = useState('');

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'enter') {
            loadUser(username);
        }
    };

    return (
        <div className={classes.search}>
            <h2>Search for a user:</h2>
            <p>Know your best repositories</p>

            <div className={classes.search_container}>
                <input
                    type='text'
                    placeholder='Enter username'
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button type='submit' onClick={() => loadUser(username)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;
