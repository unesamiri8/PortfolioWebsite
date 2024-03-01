import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
let NAV =(props)=>{ 
    let navMenu =()=>{
        let menu = document.getElementById('menu');
        menu.classList.toggle('toggle')
    }
    return(
       <>
        <nav>
            <span className="logo">{props.logo}</span>
            <span className='logoTitle'>{props.logoTitle}</span>
            <span className='ni' onClick={navMenu}><FontAwesomeIcon icon={faBars}/></span>
            <div className="nMiddle">
                <a href='/projects' className='n1'>{props.n1}</a>
                <a href='/about' className='n2'>{props.n2}</a>
                <a href='/contact' className='n3'>{props.n3}</a>
            </div>
            <a href='mailto:unesblgr@gmail.com' className="n4">{props.n4}</a>
        </nav>
        <div id="menu" className='menu'>
            <a href='/projects' className='m1'>Projects</a>
            <a href='/about' className='m2'>About</a>
            <a href='/contact' className='m3'>Contact</a>
        </div>
       </>
    )
}


export default NAV