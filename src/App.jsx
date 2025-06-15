import React, { Children } from "react";
import { people } from "./components/data";
import { useState } from "react";
import {sculptureList} from "./components/data"

function Item({name, isStudent}){
  return(
    <li className="item">
      {name} {isStudent && '✅'}
    </li>
  )
}

function Guest({guest}){
  return(
    <>
      <br />
      <p>Tea Cub For Guest #{guest}</p>
    </>
  )
}

function Button(){
  return(
    <button onClick={onClick}>{Children}</button>
  )
}

function Toolbar({onPlayVideo, onUploadImage}){
  return(
    <div className="text-blue">
      <button onClick= {onPlayVideo}>Play Video</button>
      <button onClick= {onUploadImage}> Upload Image</button>
    </div>
  )
}

export default function Students(){
  const listitems = people.map(person =>
    <li key={person.id}>
      <hr /><br />
      <h1>{person.name}</h1>
      <p>Is a {person.profession} and has accomplished {person.accomplishment}.</p><br />
    </li>
  )
  const[index, setIndex] = useState(0);
  const[showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasBackNext = index > 1;

  function handleNextClick(){
    if (hasNext){
      setIndex(index+1)
    }else{
      setIndex(0)
    }
  }

  function handleBackIndex(){
    if(hasBackNext){
      setIndex(index-1)
    }else{
      setIndex(sculptureList.length-1)
    }
  }

  function handleMoreClick(){
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index]

  return(
    <div className="bg-white text-black p-20 flex flex-col gap-10">
      <h1>Students list</h1>
      <ul className="flex flex-col gap-7">
        <Item name = 'John' isStudent={true}/>
        <Item name = 'Denis' isStudent={true}/>
        <Item name = 'Kelvin' isStudent={false}/>
        <Item name = 'Alvin' isStudent={true}/>
        <Item name = 'Faith' isStudent={false}/>
      </ul>

      <article>
      <h1>Scientists</h1>
      <ul>{listitems}</ul>
      </article>

      <div>
        <h1>Pure components</h1>
        <Guest guest={1}/>
        <Guest guest={2}/>
        <Guest guest={3}/>
        <Guest guest={4}/>
        <Guest guest={5}/>
      </div>

      <div>
        <h1>Alert</h1>
        <Toolbar 
          onPlayVideo={() => alert('Playing!!')}
          onUploadImage={() => alert('Uploading!!')}
        />
      </div>
      <div>
        <button onClick={handleBackIndex}>Back</button>
        <button onClick={handleNextClick}>Next</button>
        <span>
          <h1>{sculpture.name}</h1>
          <i>{sculpture.artist}</i>
        </span>
        <h3>{index + 1} of {sculptureList.length}</h3>
        <button onClick={handleMoreClick}>{showMore ? 'Hide ':'Show '} details</button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </div>
  )
}
