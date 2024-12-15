// import { useState } from "react"
import MenuItem from "./MenuItem"

export default function Menulist({ list = [] }) {

    return (
        <ul className="menuListContainer" >

            {
                list && list.length ? list.map((listItem) =>
                    <MenuItem item={listItem} />) : null
            }

        </ul >




    )

}