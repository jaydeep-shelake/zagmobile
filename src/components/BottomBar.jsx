import { gsap } from "gsap"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
const BottomBar = () => {
    const location = useLocation()
    const path = location.pathname
  useEffect(()=>{
    if(path==='/'){
        play(0)
    }
  },[])
    const handleMouseEnter =(i)=>{
       play(i)
    }

    const handleMouseLeave =(i)=>{
      reverse(i)

    }

    const play =(i)=>{
        gsap.to(`.icon-${i}`,{width:'76px', duration:0.5,background:'#EEEEEE'})
        gsap.to(`.text-${i}`,{width:'auto',opacity:1,marginLeft:'3px',duration:0.5}) 
    }

    const reverse =(i)=>{
        gsap.to(`.icon-${i}`,{width:'30px', duration:0.5,background:''})
        gsap.to(`.text-${i}`,{width:0,opacity:0,marginLeft:0,duration:0.1})
    }

    const tabs = [
       'home','cart','noti','profile'
    ]

    const getSvg=(index)=>{
        switch(index){
            case 0 :
                return(
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.31283 12.2024V10.2153C4.31283 9.70769 4.72689 9.29623 5.2378 9.29623H7.10659C7.35164 9.29623 7.58693 9.39308 7.76048 9.56534C7.93404 9.73759 8.03153 9.97159 8.03153 10.2153V12.2024C8.03023 12.4137 8.11345 12.6165 8.26295 12.766C8.4131 12.9155 8.61656 13 8.82911 13H10.1038C10.6992 13.0013 11.2705 12.7679 11.6918 12.3506C12.1136 11.9333 12.3502 11.3665 12.3502 10.7757V5.11341C12.3502 4.63565 12.137 4.18324 11.7685 3.87708L7.43223 0.439167C6.67821 -0.163393 5.59724 -0.143894 4.86533 0.485318L0.628568 3.87708C0.242461 4.17414 0.0117002 4.6285 0 5.11341V10.7698C0 12.0016 1.00556 13 2.24644 13H3.49187C3.93323 13 4.29203 12.6464 4.29528 12.2083L4.31283 12.2024Z" fill="black" className={`group-hover:fill-white ${path==='/'?'fill-white':''}`}/>
            </svg> 
                )
            case 1 : 
               return (
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M3.19272 14.767C3.19272 14.0812 3.74786 13.526 4.43363 13.526C5.11124 13.526 5.66639 14.0812 5.66639 14.767C5.66639 15.4446 5.11124 15.9997 4.43363 15.9997C3.74786 15.9997 3.19272 15.4446 3.19272 14.767ZM12.3772 14.767C12.3772 14.0812 12.9323 13.526 13.6181 13.526C14.2957 13.526 14.8508 14.0812 14.8508 14.767C14.8508 15.4446 14.2957 15.9997 13.6181 15.9997C12.9323 15.9997 12.3772 15.4446 12.3772 14.767Z" fill="black" className={`group-hover:fill-white ${path==='/cart'?'fill-white':''}`}/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8508 3.14257C15.3488 3.14257 15.6754 3.31402 16.002 3.68956C16.3285 4.0651 16.3856 4.60392 16.3122 5.09294L15.5366 10.4485C15.3897 11.478 14.508 12.2364 13.4711 12.2364H4.56427C3.47846 12.2364 2.58042 11.4037 2.49062 10.3268L1.73955 1.42733L0.506783 1.21506C0.180225 1.15792 -0.0483782 0.839523 0.00876944 0.512965C0.0659171 0.178243 0.384332 -0.0421827 0.719054 0.00680098L2.66614 0.300704C2.94371 0.350504 3.14781 0.578278 3.1723 0.855852L3.32742 2.68457C3.35191 2.94664 3.56418 3.14257 3.82543 3.14257H14.8508ZM9.90349 7.38701H12.1649C12.5078 7.38701 12.7772 7.10943 12.7772 6.77471C12.7772 6.43182 12.5078 6.16241 12.1649 6.16241H9.90349C9.56061 6.16241 9.2912 6.43182 9.2912 6.77471C9.2912 7.10943 9.56061 7.38701 9.90349 7.38701Z" fill="black" className={`group-hover:fill-white ${path==='/cart'?'fill-white':''}`}/>
                </svg>

               )
            case 2:
                return (
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0155 7.71618C12.4311 7.03378 12.1656 6.44243 12.1656 5.43768V5.09606C12.1656 3.7868 11.8642 2.94323 11.2091 2.09965C10.1994 0.789585 8.49945 0 6.8353 0H6.76459C5.13548 0 3.48885 0.75333 2.46158 2.01022C1.77062 2.87071 1.43431 3.75054 1.43431 5.09606V5.43768C1.43431 6.44243 1.18623 7.03378 0.584395 7.71618C0.141518 8.21897 0 8.86513 0 9.56448C0 10.2646 0.229759 10.9277 0.690955 11.4668C1.29279 12.1129 2.14278 12.5254 3.01102 12.5972C4.26797 12.7405 5.525 12.7945 6.80035 12.7945C8.07489 12.7945 9.33192 12.7043 10.5897 12.5972C11.4571 12.5254 12.3071 12.1129 12.9089 11.4668C13.3693 10.9277 13.5999 10.2646 13.5999 9.56448C13.5999 8.86513 13.4584 8.21897 13.0155 7.71618Z" fill="black"/>
                        <path opacity="0.4" d="M8.40703 13.7828C8.00704 13.6974 5.57018 13.6974 5.17018 13.7828C4.82835 13.8618 4.45859 14.0455 4.45859 14.4483C4.47851 14.8326 4.70355 15.1719 5.01514 15.387L5.01442 15.3878C5.41746 15.7019 5.89058 15.9018 6.38593 15.9735C6.64985 16.0098 6.91857 16.0082 7.19209 15.9735C7.68664 15.9018 8.15976 15.7019 8.56287 15.3878L8.56207 15.387C8.87375 15.1719 9.09871 14.8326 9.11863 14.4483C9.11863 14.0455 8.74887 13.8618 8.40703 13.7828Z" fill="black"/>
                    </svg>
                )
            case 3 :
                return (
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                        <path d="M6.39767 10.5396C2.94724 10.5396 0 11.0836 0 13.2596C0 15.4364 2.92884 15.9996 6.39767 15.9996C9.84811 15.9996 12.7953 15.4564 12.7953 13.2796C12.7953 11.1028 9.8673 10.5396 6.39767 10.5396Z" fill="black"/>
                        <path opacity="0.4" d="M6.39772 8.46728C8.74815 8.46728 10.6314 6.58326 10.6314 4.23364C10.6314 1.88402 8.74815 0 6.39772 0C4.0481 0 2.16406 1.88402 2.16406 4.23364C2.16406 6.58326 4.0481 8.46728 6.39772 8.46728Z" fill="black"/>
                  </svg>
                )
        }
    }

   
    
  return (
    <div className="w-full mx-auto max-w-[375px] h-[70px] fixed bottom-0 rounded-t-[30px] primary-boxshadow flex items-center justify-evenly p-[20px] z- cursor-pointer">
        {
            tabs.map((tab,i)=>(
                  <div  key={tab} className={`icon-${i} flex items-center justify-start w-[30px] h-[30px] rounded-[30px] `} onMouseEnter={()=>handleMouseEnter(i)} onMouseLeave={()=>handleMouseLeave(i)}>
            <div className={`w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer group hover:bg-black ${path==='/'+tab&&'bg-black'} ${i===0&&'bg-black'}`}>
             {getSvg(i)}
        </div>
          <p className={`text-[11px] font-semibold text-${i} opacity-0 w-0`}>{tab}</p>
        </div>
            ))
        }
      
        
            
    </div>
  )
}

export default BottomBar