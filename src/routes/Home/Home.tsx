import { useState } from 'react';

import { userProps } from '../../types/user';
import User from '../../components/User/User';
import Error from '../../components/Error/Error';
import Search from '../../components/Search/Search';

const Home = () => {
    const [user, setUSer] = useState<userProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async (username: string) => {
        setUSer(null);
        setError(false);

        const res = await fetch(`https://api.github.com/users/${username}`);

        const data = await res.json();

        if (res.status === 404) {
            setError(true);
            return;
        }

        const { avatar_url, login, location, followers, following } = data;

        const userData: userProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };

        setUSer(userData);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {error && <Error />}
        </div>
    );
};

export default Home;
