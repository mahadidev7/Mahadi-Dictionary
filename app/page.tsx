"use client";
import { useState } from "react";
import { initialThirtyDictionary } from "../app/data/dictionary";

export default function Home() {
  const [selectWord, setSelectWord] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const handelDrawerFun = (text: string) => {
    setSelectWord(text);
  };

  const handelSearchFun = () => {
    setSelectWord(searchWord);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const handelPOPUPFun = (url: string) => {
    window.open(url, "_blank", "width=500,height=700");
  };

  return (
    <div className="relative h-full w-full bg-[#044150]">
      <div className="flex gap-0">
        <div className="flex-1 h-screen overflow-y-scroll">
          <div className="flex flex-wrap justify-start">
            {initialThirtyDictionary?.split(" ")?.map((word, index) => (
              <div key={index} className="">
                <p
                  onClick={() => handelDrawerFun(word)}
                  className={`text-center text-[20px] mx-5 my-7 font-medium ${word === selectWord ? "text-[#ffd700]" : ""} pointer`}
                >
                  {word},
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="bg-[#010b0f] h-full p-3">
            <div className="flex flex-col gap-2 justify-between items-center">
              <h1 className="text-xl capitalize">{selectWord}</h1>
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  className="p-2 rounded-md border border-gray-500 w-full"
                  placeholder="Type your meaning here..."
                  value={searchWord}
                  onChange={handleChange}
                />
                <button
                  className="pointer px-3 bg-[#02293bea]"
                  onClick={() => handelSearchFun()}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="result mt-3 border-t border-gray-500 pt-3">
              <div className="flex flex-col gap-3">
                <button
                  className="pointer p-3 bg-[#05614dea] rounded-sm"
                  onClick={() =>
                    handelPOPUPFun(
                      `https://dictionary.cambridge.org/dictionary/english/${selectWord}`
                    )
                  }
                >
                  cambridge
                </button>
                <button
                  className="pointer p-3 bg-[#05614dea] rounded-sm"
                  onClick={() =>
                    handelPOPUPFun(
                      `https://www.oxfordlearnersdictionaries.com/definition/american_english/${selectWord}?q=${selectWord}`
                    )
                  }
                >
                  oxford
                </button>
                <button
                  className="pointer p-3 bg-[#05614dea] rounded-sm"
                  onClick={() =>
                    handelPOPUPFun(
                      `https://translate.google.com/?sl=en&tl=bn&text=${selectWord}%0A&op=translate`
                    )
                  }
                >
                  google translate
                </button>
                <button
                  className="pointer p-3 bg-[#05614dea] rounded-sm"
                  onClick={() =>
                    handelPOPUPFun(
                      `https://youglish.com/pronounce/${selectWord}/english`
                    )
                  }
                >
                  youglish
                </button>
                <button
                  className="pointer p-3 bg-[#05614dea] rounded-sm"
                  onClick={() =>
                    handelPOPUPFun(
                      `https://ozdic.com/collocation/${selectWord}`
                    )
                  }
                >
                  ozdic
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
