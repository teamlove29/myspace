import React,{useContext} from 'react'
import { useRouter } from "next/router";
import MenuSetting from '../../../component/menuSetting'
import { ModalContext } from "../../../config/context/ModalProvider";
export default function Social() {
    const router = useRouter();
    const { username } = router.query;
    const { nameMember } = useContext(ModalContext);
    const verifyMember = username != nameMember ? false : true;
    return (
        <MenuSetting>
               <h1>Page social </h1>
        </MenuSetting>
    )
}
