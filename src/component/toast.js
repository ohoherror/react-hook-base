import React, { memo } from "react";
import { createRoot } from "react-dom/client";


const Loading = memo((props) => {
    return (
        <div className="absolute flex items-center justify-center w-full h-full" style={{ position: "fixed", zIndex: 9999, background: 'rgb(0,0,0,0.1)' }}>
            <img src='https://img.vis-viva.com.cn/website/audit/loading.svg'></img>
            {props.msg}我的toast
        </div>
    )
})

const JCLoading = {
    show(msg) {
        const oWrapper = document.createElement("div")
        //此处避免重复引入div
        if (!document.getElementById('loading_dialog')) {
            oWrapper.setAttribute("id", "loading_dialog")
            oWrapper.style.position = 'absolute'
            oWrapper.style.top = '0'
            document.body.appendChild(oWrapper)
            this.wrapperRoot = createRoot(oWrapper)
            this.wrapperRoot.render(<Loading  msg={msg}/>)
            // console.log(this.remove)
        }
    },
    remove() {
        console.log(document.getElementById('loading_dialog'))
        if (document.getElementById('loading_dialog')) {
            document.body.removeChild(document.getElementById('loading_dialog'))
        }

    }
}

export default JCLoading