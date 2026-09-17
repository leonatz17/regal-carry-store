
export default function About() {
    return (
        <>
            <div className="w-full min-h-screen bg-[#0A2947]">
                <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-10 md:px-6 px-4">

                    <img className="w-full h-[50vh] rounded object-center  object-cover" src="https://images.stockcake.com/public/4/9/c/49cb0420-ea1b-4c20-89d1-b674a53bc301/vintage-backpack-display-stockcake.jpg" alt="Top Image" />


                    <div className="w-full flex gap-2 items-center justify-between">
                        <div className="ld:w-1/3 flex flex-col">

                            <h2 className="text-4xl capitalize font-semibold text-[#F69D39] font-serif">Welcome to Regal Carry</h2>
                            <p className="mt-5 text-[#F69D39] font-serif">At Regal Carry, we believe that a bag is more than just an accessory—it is a companion for your daily journey. Founded on the principles of timeless elegance and functional luxury, our mission is to provide high-quality carryalls that complement your lifestyle, whether you are navigating the boardroom or exploring a new city.

                                We specialize in curated designs that bridge the gap between classic craftsmanship and modern utility. Every piece in our collection is selected for its durability, aesthetic appeal, and the subtle "regal" touch it brings to your everyday wardrobe.</p>

                        </div>

                        <img className="lg:block hidden w-[16rem] h-[18rem] border-[1px] border-[#F69D39]" src="https://i.pinimg.com/736x/fa/2a/51/fa2a514dce5ce904d292152195e990f1.jpg" alt="image" />
                        <img className="xl:block hidden w-[16rem] h-[18rem] border-[1px] border-[#F69D39]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZo-TiUtS075EGD1oLs1E8Maxrjxi90JMxlDeki9QQd5JemfgzpbCHXY&s=10" alt="image" />
                        <img className="sm:block hidden w-[16rem] h-[18rem] border-[1px] border-[#F69D39]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4nQ7VhhqoaCkdJ9UB4zShpc7AcfS3rgVC1-HNnc55mI9_zbaHzdgH4g&s=10" alt="image" />
                    </div>
                </div>
                <section className="bg-[#F69D39] text-[#0A2947] font-serif py-12 px-4">
                    <h2 className="text-3xl font-bold  text-center">Our Values</h2>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        Uncompromising Quality: We partner with skilled artisans and use premium materials to ensure your bag stands the test of time.
                    </p>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        Refined Design: Our aesthetic is rooted in sophistication. We favor clean lines, rich textures, and thoughtful details.
                    </p>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        Empowered Utility: We design for the modern individual who needs their gear to work as hard as they do, without sacrificing style.
                    </p>
                </section>

            </div>

        </>
    )
}