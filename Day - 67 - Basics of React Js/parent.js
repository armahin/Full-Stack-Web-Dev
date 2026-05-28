import box from "./box.js"
import circle from "./circle.js"

let parent = function parent(){
   return React.createElement('div',{class:"par"},[box(),circle()])
}

export default parent;