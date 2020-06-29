import React,{useContext} from 'react'
import { useRouter } from "next/router";
import MenuSetting from '../../../component/menuSetting'
import { ModalContext } from "../../../config/context/ModalProvider";
export default function Account() {
    const router = useRouter();
    const { username } = router.query;
    const { nameMember } = useContext(ModalContext);
    const verifyMember = username != nameMember ? false : true;
    return (
        <>
        {verifyMember && 
        <MenuSetting>
            <h1>Page Account </h1>
        </MenuSetting>
        }
        </>
    )
}
