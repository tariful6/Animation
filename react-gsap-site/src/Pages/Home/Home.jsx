import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef, useState } from 'react';

const Home = () => {
    // Page one animation  =================================================
    //  box one  --------
    useGSAP(()=>{
        gsap.to('.box1',{
            x: 700,
            duration : 2,
            delay : 1
        })
    })
    
    //  box two  --------
    const gsapRaf = useRef() // we use raf when we animate only one element.
    useGSAP(()=>{
        gsap.from(gsapRaf.current,{
            x: 800,
            duration : 2,
            delay : 1
        })
    })

    // Page two animation  =================================================
    useGSAP(()=>{
        gsap.from('.boxx',{
            opacity : 0,
            rotate : 360,
            y : 300,
            duration : 1,
            delay : 1
        })
    })

    const [moveX, setMoveX] = useState(0)
    const [moveY, setMoveY] = useState(0)
    const [spain, setSpain] = useState(0)
    const randomMoveY = gsap.utils.random(-500, 500, 100)
    const randomMoveX = gsap.utils.random(-500, 500, 100)
    const randomRotate = gsap.utils.random(-360, 360, 30)

    useGSAP(()=>{
        gsap.to('.circle2',{
            x : moveX,
            y : moveY,
            rotate : spain,
            duration : 0.5,
        },)
    },[moveX, spain, moveY])


    // Page three animation  =================================================
    const { contextSafe } = useGSAP() // save memory space. 
    const rotateBox = contextSafe(
        function(){
            gsap.to('.box3',{
               rotate:360,
               duration:0.5,
           })
        } 
     )
    
    return (
        <div>
            {/* Page one ----------------------------------- */}
            <section className=' w-full h-screen bg-black py-12'>
                 <h2 className=' text-center py-2 text-white'>install -- npm install @gsap/react</h2>
                 <h2 className=' text-center py-2 text-white mb-9 text-4xl font-bold'>Page One - Basic Animation</h2>
                 {/* box one  */}
                 <div className="box1 h-40 w-40 bg-amber-600 my-3 flex items-center justify-center">Box 1</div>
                  {/* box two  */}
                 <div ref={gsapRaf} className="box2 h-40 w-40 bg-green-500 flex items-center justify-center"> Box 2</div>
            </section>


            {/* Page two ----------------------------------- */}
            <section className=' w-full h-screen bg-gray-500 py-24'>
                <h2 className=' text-4xl font-bold text-center text-white'>Page two - Click and Multi element Animation</h2>
            {/* mouse click event div  */}
                <div className=' py-16'>
                    <div className="container flex justify-evenly">
                        <div className="container-box1 p-4 border-2 rounded-2xl">
                            <div className="boxx w-40 h-40 bg-amber-300 mt-6 flex items-center justify-center">boxx</div>
                            <div className="boxx h-40 w-40 bg-amber-500 mt-6 flex items-center justify-center">boxx</div>
                        </div>
                        <div className="container-box2 ">
                            <div onClick={()=> {
                                setMoveX(randomMoveX);
                                setSpain(randomRotate);
                                setMoveY(randomMoveY)
                            }} className="circle2 bg-amber-600 h-28 w-28 rounded-4xl flex items-center justify-center text-white text-md font-bold">Click Me <br />to move</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Page three ----------------------------------- */}
            <section className=' w-full h-screen bg-gray-400 py-24'>
                <h2 className=' text-4xl font-bold text-center text-white'>Page three - Click  Animation memory space save</h2>
            <div className='py-16'>
                 <div className=' flex flex-col items-center'>
                    <div className="box3 h-40 w-40 bg-amber-600 mt-6"></div>
                 </div>
                <div className=' text-center mt-9'>
                    <button onClick={rotateBox} className='px-9 py-2 bg-orange-300 rounded-2xl active:scale-95 text-white'>Animate</button>
                </div>
            </div>
            </section>


        </div>
    );
};

export default Home;