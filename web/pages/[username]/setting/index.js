import React from 'react';
import { useRouter } from "next/router";
const index = () => {
    const router = useRouter();
    const { username } = router.query;
    return (
        <div>
            <h1 className="text-light">Page setting By {username}</h1>
        </div>
    );
}

export default index;
