"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    setList([...list, note]);
    setNote("");
  }
  return (
    <main className="bg-blue-400 h-screen flex justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl mt-10 text-white">Notes keeper</h1>
        <div className="flex gap-4 flex-col items-end">
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="your note..."
            className="p-4 flex h-96 rounded "
          />
          <button
            onClick={handleClick}
            className="bg-blue-200 text-blue-900 w-24 p-2 font-semibold flex justify-center rounded px-1"
          >
            Add note
          </button>
        </div>
        {list.map((element) => {
          return (
            <p key={element} className="flex flex-col bg-blue-100 p-2 rounded">
              {element}
            </p>
          );
        })}
      </div>
    </main>
  );
}
