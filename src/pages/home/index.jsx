export default function Home() {
    return (
        <>
            <div className="bg-background-america relative h-[3500px] md:h-[2000px] bg-cover bg-no-repeat">
                <div className="absolute top-[800px] w-full bg-base-eth px-[16px] md:px-[60px] h-[2000px] md:h-[900px]">
                    <div className="absolute left-0 right-0 top-[-700px] px-[16px]">
                        <div className="flex items-center justify-center flex-col md:flex-row">
                            <img
                                src="/assets/cropped-MAPE-4-eth.png"
                                alt=""
                                className="w-[600px]"
                            />
                            <div className="flex flex-col mt-[100px]">
                                <img
                                    src="/assets/cropped-maga-pepe.png"
                                    alt=""
                                    className="w-[500px]"
                                />
                                <div className="flex gap-[50px] mt-[20px] md:flex-row flex-col items-center">
                                    <a
                                        href="https://x.com/MapeOnBase"
                                        className="flex"
                                        target="_blank"
                                    >
                                        <img
                                            src="/assets/X-LOGO.svg"
                                            alt=""
                                            className="w-[200px] md:w-[87px] shrink-0"
                                        />
                                    </a>
                                    <a
                                        href="https://t.me/MapeOnBase"
                                        className="flex"
                                        target="_blank"
                                    >
                                        <img
                                            src="/assets/WHITE-TG-LOGO.svg"
                                            className="w-[200px] md:w-[87px] shrink-0"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        href="https://t.me/MapeOnBaseChannel"
                                        className="w-[200px] md:w-[87px] shrink-0"
                                        target="_blank"
                                    >
                                        <img
                                            src="/assets/WHITE-TG-LOGO.svg"
                                            className="w-[200px] md:w-[87px] shrink-0"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-[10px] md:gap-0 justify-center items-center absolute left-0 right-0 top-[1200px] md:top-[300px] px-[16px]">
                        <div className="bg-[#0D167C] border-[10px] border-[white] p-[10px] md:w-[586px] md:px-[40px]">
                            <div className="flex items-center flex-col p-[16px] justify-center">
                                <div className="text-[#ff0404] text-[45px]">THE FIST STAYS UP!</div>
                                <div className="text-text-white text-[24px]">Many men, wish death upon Pepe, They say I’m just a frog, but I’m so much more, In the meme wars, I’m the one they adore, keep the gats away cause pepe here to stay.</div>
                            </div>
                        </div>
                        <div className="border-[8px] rounded-r-[50px] border-[white]">
                            <img src="/assets/fistup.png" alt="" className="w-[500px] rounded-r-[40px]"/>
                        </div>
                    </div>
                </div>
                <div className="bg-base-eth opacity-90 h-[300px] w-full absolute bottom-0">
                </div>
                <div className="absolute bottom-0 w-full flex items-center justify-center flex-col py-[50px] px-[16px]">
                    <div className="text-center text-[43px] uppercase text-text-white">MAPENOMICS</div>
                    {/* <div className="text-center text-[31px] uppercase text-[#000000] break-all">0x683A4ac99E65200921f556A19dADf4b0214B5938</div> */}
                    <div className="flex justify-center pt-[100px]">
                    <div className="text-text-white w-full flex flex-col">
                        <div className="flex gap-[20px] items-center">
                            <img src="/assets/stars.svg" alt="" className="w-[35px]"/>
                            <div className="md:text-center text-[31px] uppercase text-text-white">BURNT LIQUDIITY</div>
                        </div>
                        <div className="flex gap-[20px] items-center">
                            <img src="/assets/stars.svg" alt="" className="w-[35px]"/>
                            <div className="md:text-center text-[31px] uppercase text-text-white">0% TAX ON BUYS & SELLS</div>
                        </div>
                        <div className="flex gap-[20px] items-center">
                            <img src="/assets/stars.svg" alt="" className="w-[35px]"/>
                            <div className="md:text-center text-[31px] uppercase text-text-white">420,690,000,000 $MAPES</div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="relative min-h-screen bg-trump-mape bg-cover bg-fixed bg-center">
                <div className="absolute top-0 bg-base-eth">
                    <div className="flex items-center justify-center px-[16px] md:px-[60px]">
                        <div className="text-center text-[43px] uppercase text-[#d0ff1e]">
                            NEVER SURRENDER • NEVER SURRENDER • NEVER SURRENDER
                            • NEVER SURRENDER
                        </div>
                    </div>
                </div>
                <img
                    src="/assets/cloud-reserve.svg"
                    alt=""
                    className="absolute top-[510px] md:top-[120px]"
                />
                <div className="absolute top-[190px] h-screen w-full bg-base-eth opacity-20" />
                <img
                    src="/assets/cloud-footer.svg"
                    alt=""
                    className="absolute top-[870px] md:top-[800px] w-full"
                />
                <div className="absolute top-[900px] w-full bg-base-eth pt-[100px]">
                    <div className="flex items-center justify-center px-[16px] md:px-[60px]">
                        <div className="text-[43px]">
                            <div className="uppercase text-[#d0ff1e]">
                                NEVER SURRENDER • NEVER SURRENDER •
                            </div>
                            <div className="uppercase text-[#d0ff1e]">
                                NEVER SURRENDER • NEVER SURRENDER
                            </div>
                            <div className="px-[60px] py-[30px] text-center text-[16px] text-text-white md:px-[16px]">
                                © 2024 MAGA PEPE.{' '}
                                <a href="">CREATED BY MAPE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
