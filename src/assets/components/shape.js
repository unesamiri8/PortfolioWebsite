import '../../assets/style/landing.css'
let Shape = (props)=>{
    return(
        <svg height={props.height} width={props.width} className={props.class}>
            <circle cx={props.cx} cy={props.cy} r={props.r} stroke={props.stroke} stroke-width="1" fill={props.fill} />
        </svg>
    )
}

export default Shape