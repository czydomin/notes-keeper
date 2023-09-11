"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [note, setNote] = useState("");
  const [list, setList] = useState([
    "asd123",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleClick() {
    if (note === "") {
      alert("You cannot add empty note");
      return;
    }

    if (note.length < 5) {
      alert("Your note must be at least 5 characters long ");
      return;
    }

    const isExistingNote = list.includes(note);

    if (isExistingNote) {
      alert("You've already make the same note");
    } else {
      setList([...list, note]);
      setNote("");
    }
  }
  function handleClickDelete() {
    setNote("");
    setSelectedIndex(null);

    const newList = list.filter((value, index) => {
      return selectedIndex !== index;
    });

    setList(newList);
  }
  function handleClickEdit() {
    const newList = list.map((element, index) => {
      if (selectedIndex === index) {
        return note;
      }

      return element;
    });

    setList(newList);
  }
  function handleClickClear() {
    console.log("Clear text area");
    setNote("");
    setSelectedIndex(null);
  }
  return (
    <main className="bg-blue-400 h-screen flex py-10 justify-center">
      <div className="flex gap-20">
        <div className="flex flex-col items-end gap-4">
          <div className="flex flex-col gap-4 bg-blue-300 p-4 rounded">
            <h1
              className="text-3xl  text-white
          "
            >
              Notes keeper
            </h1>

            {list.map((element, index) => {
              return (
                <div key={element} className=" flex justify-center">
                  <button
                    onClick={() => {
                      setSelectedIndex(index);
                      const selectedNote = list[index];
                      setNote(selectedNote);
                    }}
                  >
                    <p
                      className={`flex flex-col  ${
                        selectedIndex === index
                          ? "bg-yellow-100"
                          : "bg-blue-100"
                      } w-48 p-2 rounded`}
                    >
                      {element.substring(0, 19)}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
          {selectedIndex === null ? (
            <button
              onClick={handleClick}
              className="bg-blue-200 text-blue-900 w-24 p-2 font-semibold flex justify-center rounded px-1"
            >
              Add note
            </button>
          ) : null}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-end gap-4  bg-pink-300">
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="your note..."
              className="p-4 flex h-96 w-96 rounded "
            />
          </div>
          <div className="flex justify-between">
            {selectedIndex !== null ? (
              <button
                onClick={handleClickDelete}
                className="w-24 p-2 font-semibold flex justify-center rounded px-1 text-blue-900 bg-red-200"
              >
                Delete
              </button>
            ) : null}

            <button
              onClick={handleClickClear}
              className="w-24 p-2 font-semibold flex justify-center rounded px-1 text-blue-900 bg-blue-300"
            >
              Clear
            </button>
            {selectedIndex !== null ? (
              <button
                onClick={handleClickEdit}
                className="w-24 p-2 font-semibold flex justify-center rounded px-1 bg-blue-200 text-blue-900
            "
              >
                Edit
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
