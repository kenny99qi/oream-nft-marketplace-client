import React from 'react';
import {useSelector} from "react-redux";
import {eth} from "../assets";
import CollectionInfo from "../components/Cards/CollectionInfo";
import CardsList from "../components/Cards/CardsList";

const Collection = () => {
    const data = useSelector(state => state.item.data[0]);
    const data1 = useSelector(state => state.item.data);
    const items = [...data1, ...data1, ...data1, ...data1, ...data1]

    return (
        <div className="
                        flex flex-col justify-center bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto

        ">
            <img className="
                w-full h-60
            " src={data.image} alt="banner"/>
            <CollectionInfo data={data}/>
            <div className="
                w-11/12 my-3
            ">
                <CardsList type={"details"} items={items}/>
            </div>
        </div>
    );
};

export default Collection;
