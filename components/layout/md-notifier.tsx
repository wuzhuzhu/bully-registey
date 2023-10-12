import React from 'react'

const MdNotifier = () => {
    return (
        <div className='md:hidden text-center'>
            <h1 className='text-2xl mb-4'>屏幕分辨率过低</h1>
            <p>管理后台页面不支持小屏幕显示,请使用电脑访问</p>
        </div>
    )
}

export default MdNotifier