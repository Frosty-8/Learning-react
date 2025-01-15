/*
Hooks can only be called at the top level of component 
 Hook APIs provide an alternative to writing
 it cannot be conditional
only be used in functional component

useContext Hook
context is a way to manage state globally

Step 1 : 
import {createContext} from "react";
*/

import { createContext } from "react";
export const studentContext = createContext();