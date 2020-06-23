import {useRouter} from 'next/router'

export default () => {
    const router = useRouter();
    const { username } = router.query
    return (
        <div>
            <h1>Page is {username}</h1>
        </div>
    )
}
