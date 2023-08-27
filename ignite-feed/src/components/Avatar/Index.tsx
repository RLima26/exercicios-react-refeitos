import { AvatarContainer } from "./styles";
import {ImgHTMLAttributes} from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    haBordas?: boolean,
    imgUrl: string 
}

export function Avatar({haBordas= true, imgUrl,...props}: AvatarProps){
    return (
        <AvatarContainer 
            className={
                haBordas ? 'avatarComBordas': 'avatar'
            }
            {...props}
            src={imgUrl}
        />
    )
}