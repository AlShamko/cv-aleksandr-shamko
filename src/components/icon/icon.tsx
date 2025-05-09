import iconsSprite from '../../assets/images/icons-sprite.svg';

type iconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

 export const Icon = (props: iconPropsType) => {
    return (
        <svg width={props.width || "30"} height={props.height || "30"} viewBox={props.viewBox || "0 0 30 30"} preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>

    );
};
