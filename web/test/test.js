import styles , { span , h3 } from './style'
import styled from 'styled-components'

export default function test() {
    return (
        <div>
            <h3>This is Header h3</h3>
            <span>This is Test</span>
            <style jsx>{ span }</style>
        </div>
    )
}