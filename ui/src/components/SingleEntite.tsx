const SingleEntite = ({ entitie }: any) => {

    const name = entitie.author.name
    const src = entitie.author.picture
    const isTrending = entitie.isTrending
    const title = entitie.title
    const description = entitie.description
    const thumbnail = entitie.thumbnail
    const pledgeTotal = entitie.pledgeTotal
    const pledgeGoal = entitie.pledgeGoal
    const codeSubmissionTotal = entitie.codeSubmissionTotal
    const numComments = entitie.numComments


    return (
        <div className="border mb-[20px] rounded-md">

            <div className="mx-[50px]">

                {isTrending ?
                    <div className="flex justify-end pt-[10px]">
                        <div className="h-[25px] flex-center px-[25px] rounded-2xl bg-red-700 text-white">Trending</div>
                    </div>
                    :
                    <div className="flex justify-end pt-[10px]">
                        <div className="h-[25px] flex-center px-[25px] rounded-2xl bg-green-500 text-white">Task Complete</div>
                    </div>
                }


                <div className="flex items-center mb-[50px]">
                    <img
                        className="w-[100px] h-[100px] mr-[30px] rounded-full"
                        src={src}
                        alt='slika'
                    />
                    <h1 className="text-3xl font-bold">{name}</h1>
                </div>

                <div className="mb-[20px]">
                    <h2 className="text-2xl font-bold mb-[20px] ">{title}</h2>
                    <p className="text-[14px] text-[#6f6f6f] font-semibold">{description}</p>
                </div>

                <div className="border border-black rounded-md mb-[30px]">
                    <div className=" h-[300px] px-[20px] flex items-center">
                        <div className="">
                            <img src={thumbnail} className="h-[150px] w-[300px]" alt='thumbnail' />
                        </div>

                        <div className="ml-[20px] h-[100%] flex flex-col justify-around">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-green-700">${pledgeTotal}</span>
                                <span className="text-3xl text-[#a1a1a1]">pledged of ${pledgeGoal} goal</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-[#6d6d6d]">${pledgeTotal}</span>
                                <span className="text-3xl text-[#a1a1a1]">pledgers</span>
                            </div>
                        </div>

                        <div className="mx-auto">
                            <div className="w-[200px] h-[50px] flex-center border border-blue-400 rounded-3xl">
                                <p className="text-[20px] text-blue-400">Pledge</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#e4e0e0] h-[50px] w-full flex items-center pl-[20px]">
                        <span className="text-[20px] pr-[30px] text-[#858585]">View Source</span>
                        <span className="text-[20px] text-[#858585]">Code Submision ({codeSubmissionTotal})</span>
                        <div></div>
                    </div>
                </div >
            </div>

            <div className="bg-[#e4e0e0] h-[50px] w-full flex items-center pl-[20px]">
                <span className="text-[20px] pr-[30px] text-[#858585] font-bold">Comments({numComments})</span>
                <span className="text-[20px] text-[#858585] font-bold">Share</span>
            </div>

        </div >
    );
}

export default SingleEntite;