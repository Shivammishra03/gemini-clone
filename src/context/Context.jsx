import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [resentPrompt, setRecentPropmt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setshowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        },75*index)
    }

    const onSent = async () => {
        setResultData("");
        setloading(true);
        setshowResult(true);
        setRecentPropmt(input)
        const response = await runChat(input);
        let responseArray = response.split("**");
        let newResponse ;
        for(let i =0; i<responseArray.length; i++ ) {
            if(i === 0 || i%2 !== 1) {
                newResponse += responseArray[i]; 
            }else {
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split("");
        for(let i = 0; i<newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord);
        }
        setResultData(newResponse2);
        setloading(false);
        setInput("");

    }
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPropmt,
        resentPrompt,
        showResult,
        input,
        resultData,
        loading,
        setInput,
        setshowResult,
        setResultData,
        setloading
    }

    return(
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider;