import React, { useState } from 'react'
import Home from './component/Home'
import { useEffect } from 'react'
import { Box } from '@mui/material';


const Core = () => {
	const [isLoad, setisLoad] = useState(false)

	useEffect(() => {
		setisLoad(true)
		
		setTimeout(() => {
			setisLoad(false)
		}, 1500);

	},[])

    return (
		<>
			{
				isLoad ?
					<Box sx={{height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
						<div className="custom-loader"></div>
					</Box>
					:
					<Home/>
			}
		</>
    )
}

export default Core