"use client";
import { useState } from "react";
import { initialThirtyDictionary } from "../app/data/dictionary";
import { initialFiftyDictionary } from "../app/data/fDictionary";

const data = [
  {
    name: "3000",
    data: initialThirtyDictionary,
  },
  {
    name: "5000",
    data: initialFiftyDictionary,
  },
];

export default function Home() {
  const [drowar, setDrowar] = useState(false);
  const [SelectDictionary, setSelectDictionary] = useState<string[]>([]);
  const [selectWord, setSelectWord] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const handelDrawerFun = (text: string) => {
    setSelectWord(text);
    setDrowar(true);
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

  const handlerSelectDictionary = (event: string) => {
    setSelectDictionary(event?.split(" "));
  };

  return (
    <div className="relative h-full w-full bg-[#044150]">
      <div className="">
        <div className="overflow-y-scroll ">
          <div className="">
            {SelectDictionary?.map((word, index) => (
              <div key={index} className="78">
                <p
                  onClick={() => handelDrawerFun(word)}
                  className={`text-center text-[28px] border-bottom mx-5 my-7 ${word === selectWord ? "text-[#ffd700]" : "text-white"} pointer`}
                >
                  {word},
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="d">
          <div className="p-2 text-center">
            <select
              className="bg-black p-2 px-4 rounded-md"
              onChange={(e) => handlerSelectDictionary(e.target.value)}
            >
              <option value=" ">select dictionary</option>
              {data?.map((i, key) => (
                <option value={i.data} key={key}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          {drowar && (
            <div className="">
              <div className="bg-[#032633] h-full p-3">
                <div className="flex flex-col gap-2 justify-between items-center">
                  <h1 className=" capitalize text-white">{selectWord}</h1>
                  <div className="flex gap-2 w-full">
                    <input
                      type="text"
                      className="p-2 rounded-md border border-gray-500 w-full"
                      placeholder="Type your meaning here..."
                      value={searchWord}
                      onChange={handleChange}
                    />
                    <button
                      className="pointer text-white px-3 bg-[#02293bea]"
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
                          `https://dictionary.cambridge.org/dictionary/english/${selectWord}`,
                        )
                      }
                    >
                      cambridge
                    </button>
                    <button
                      className="pointer p-3 bg-[#05614dea] rounded-sm"
                      onClick={() =>
                        handelPOPUPFun(
                          `https://www.oxfordlearnersdictionaries.com/definition/american_english/${selectWord}?q=${selectWord}`,
                        )
                      }
                    >
                      oxford
                    </button>
                    <button
                      className="pointer p-3 bg-[#05614dea] rounded-sm"
                      onClick={() =>
                        handelPOPUPFun(
                          `https://translate.google.com/?sl=en&tl=bn&text=${selectWord}%0A&op=translate`,
                        )
                      }
                    >
                      google translate
                    </button>
                    <button
                      className="pointer p-3 bg-[#05614dea] rounded-sm"
                      onClick={() =>
                        handelPOPUPFun(
                          `https://youglish.com/pronounce/${selectWord}/english`,
                        )
                      }
                    >
                      youglish
                    </button>
                    <button
                      className="pointer p-3 bg-[#05614dea] rounded-sm"
                      onClick={() =>
                        handelPOPUPFun(
                          `https://ozdic.com/collocation/${selectWord}`,
                        )
                      }
                    >
                      ozdic
                    </button>

                    <button
                      className="pointer p-3 bg-[#470561ea] rounded-sm"
                      onClick={() => {
                        setDrowar(!drowar);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
