import React from 'react';

const LoanDetailCard = ({ imageSrc, title, description }) => {
    return (
        <div className="basis-[15em] grow rounded-3xl transition-all duration-300 hover:shadow-gray-300  hover:shadow-lg w-40">


            <div className="p-4 mt-6">
                <h3 className="text-base text-neutral-700   whitespace-nowrap">
                    {title}
                </h3>
                <p className="text-xl font-semibold text-gray-800 my-2  ">{description}</p>
            </div>
        </div>
    );
};

export default LoanDetailCard;