import React from 'react'

import {renderToString} from "react-dom/server"
import App from '../client/app'
export const htmlstring = renderToString(<App />)
