import { proxy } from 'valtio'


const state = proxy(
    {

intro: true,//currently on home or not (check)
color: '#EFBD48',
isLogoTexture:true,//are we currently displaying logo on shirt 
isFullTexture:false,// 
logoDecal:'./ threes.png',
fullDecal:'./threejs.png'

    }
)

export default state