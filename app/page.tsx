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
  {
    name: "3000 + 5000",
    data: [initialThirtyDictionary, initialFiftyDictionary],
  },
];

export default function Home() {
  const [drowar, setDrowar] = useState(false);
  const [SelectDictionary, setSelectDictionary] = useState<string[]>([]);
  const [loadedProducts, setLoadedProducts] = useState<string[]>([]);
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
    const makeArray = event?.split(" ")
     const sortArrayMake = makeArray.filter(Boolean).slice().sort(function(a, b){
            if(a.toLowerCase() < b.toLowerCase()) { return -1; }
            if(a.toLowerCase() > b.toLowerCase()) { return 1; }
            return 0;
        });
    setSelectDictionary(sortArrayMake);

    console.log(sortArrayMake);
  };

  //  const createPagination = (items: string[], limet = 8, offset = 0)=>{
  //     const newArray: string[] = [];
  //     items.forEach((element: string, index: number) => {
  //       if(index >= offset && index < limet + offset){
  //         newArray.push(element)
  //       }
  //     });
  //     return newArray ;
  // }

  //  const newProducts = createPagination(SelectDictionary, 100, loadedProducts.length);
    // setLoadedProducts([...loadedProducts, ...newProducts])

  return (
    <div className="relative h-full w-full bg-[#044150]">
      <div className="p-2 flex">
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
        <div className="ml-2"><p>{SelectDictionary?.length}</p></div>
        
      </div>
      <div className="flex gap-0">
        <div className="flex-1">
          <div className="">
            {SelectDictionary?.map((word, index) => (
              <div key={index} className="">
                <p
                  onClick={() => handelDrawerFun(word)}
                  className={`border-b tracking-wide border-[#032633] text-[40px] mx-5 my-7 font-medium ${word === selectWord ? "text-[#ffd700]" : "text-white"} pointer`}
                >
                  {"(" + index  + ") " +word},
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="d">
          {drowar && (
            <div className="fixed top-2 right-2 z-10">
              <div className="bg-[#032633] h-full p-3 rounded-lg">
                <div className="flex flex-col gap-2 justify-between items-center">
                  <h1 className="text-xl capitalize text-white">
                    {selectWord}
                  </h1>
                  <div className="flex gap-2 w-full">
                    <input
                      type="text"
                      className="p-2 rounded-md border border-gray-500 w-full"
                      placeholder="Type your meaning here..."
                      value={searchWord}
                      onChange={handleChange}
                    />
                    <button
                      className="pointer border rounded-lg text-white px-3 bg-[#02293bea]"
                      onClick={() => handelSearchFun()}
                    >
                      🔍
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
