import React from 'react';
import VerifiedIcon from "@mui/icons-material/Verified";
import {eth} from "../../assets";
import {useNavigate} from "react-router-dom";

const BasicCard = ({item, type}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${type}/${item.id}`)
        window.location.reload()
    }
    return (
        <div className="
                            flex flex-col w-full aspect-square

                        "
             onClick={handleClick}
        >
            <div className="
                h-full w-full overflow-hidden
                rounded-2xl shadow-lg cursor-pointer
                transition duration-300 ease-in-out
                hover:scale-105 bg-[#fff]
            ">
                <img src={item?.image} alt="" className={`
                    h-3/5 w-full object-cover
                    transition duration-300 ease-in-out
                    `}/>
                <div className={`
                    flex flex-row justify-between items-center
                    relative bottom-1/6 h-1/6 w-full px-3
                    `}>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 text-[#fe7700] text-md font-bold
                    ">
                        {item?.name} &nbsp;
                        #000{item?.id}
                    </div>
                </div>
                <div className="
                            flex flex-row justify-around items-center
                            h-1/6 w-11/12 bg-white mx-auto
                            border-2 border-[#fe7700] rounded-2xl
                            my-2 cursor-pointer
                        ">
                    <div className="
                                flex flex-row justify-center items-center
                                w-1/4
                            ">
                        <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                            {item?.floorPrice}
                        </div>
                    </div>
                    <div className="
                                flex flex-row justify-center items-center
                                    text-[#fe7700] font-bold text-xs
                                ">
                        |
                    </div>
                    <div className="
                                flex flex-row justify-center items-center
                                w-2/4
                            ">
                        <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                            Rank: &nbsp;
                            <span className="
                                        text-[#fe7700] font-bold text-xs
                                    ">
                                        {item?.id}/{item?.totalSupply}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicCard;
