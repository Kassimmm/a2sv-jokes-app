"use client";
import Image from "next/image";
import { useGetJokesByNameQuery } from '../redux/jokesApi'
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import MainCard from "../components/MainCard";


export default function Home() {
  const { data, error, isLoading } = useGetJokesByNameQuery('Any')
  const [jokes, setJokes] = useState("")
  useEffect(() => {
    if (data) {
      setJokes(data.joke)
    }
  }, [data])
  return (
    <div>
      <div> 
        <div className="">
        <div className=" flex w-2/3 h-28 font-bold text-3xl bg-slate-700 rounded-md m-auto mt-10 justify-center text-center">
          <p className=" text-white m-auto">Welcome to my jokes app! </p>
        </div>

        <div className=" font-medium text-xl mt-6  justify-center text-center">
          <p>Below is a List of All the jokes I have</p>
          <div>
          </div>
        </div>

        <div className="flex flex-col mt-10">
        <div className=" flex flex-col w-1/2 h-28 font-bold text-3x bg-gray-300 m-auto mb-5 rounded-md justify-center text-center">
          <p>First Joke</p>
          <div>
          <p>{jokes}</p>
          </div>
        </div>
        <div className=" flex flex-col w-1/2 h-28 font-bold text-3x bg-gray-300 m-auto mb-5 rounded-md justify-center text-center">
          <p>First Joke</p>
          <div>
          <p>Oysters hate to give away their pearls because they are shellfish </p>
          </div>
        </div>
        <div className=" flex flex-col w-1/2 h-28 font-bold text-3x bg-gray-300 m-auto mb-5 rounded-md justify-center text-center">
          <p>First Joke</p>
          <div>
          <p>Oysters hate to give away their pearls because they are shellfish </p>
          </div>
        </div>
        <div className=" flex flex-col w-1/2 h-28 font-bold text-3x bg-gray-300 m-auto mb-5 rounded-md justify-center text-center">
          <p>First Joke</p>
          <div>
          <p>Oysters hate to give away their pearls because they are shellfish </p>
          </div>
        </div>
        <div className=" flex flex-col w-1/2 h-28 font-bold text-3x bg-gray-300 m-auto mb-5 rounded-md justify-center text-center">
          <p>First Joke</p>
          <div>
          <p>Oysters hate to give away their pearls because they are shellfish </p>
          </div>
        </div>
        
        </div>
        </div>

      </div>
    </div>
  
    
  );
}
