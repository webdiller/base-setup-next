import React, { FC, useState } from "react"
import { SharedModal } from "../shared/ui/SharedModal"

interface ComponentProps {}

const HomePage: FC<ComponentProps> = () => {
  const [isActive, setIsActive] = useState(false)
  const toggle = () => setIsActive((prev) => !prev)

  return (
    <>
      <div className="container">
        <form action="">
          <button
            type="button"
            onClick={toggle}>
            button
          </button>
          <input
            type="text"
            placeholder="text"
          />
          <textarea
            name=""
            placeholder="textarea"></textarea>
          <input type="checkbox" />
          <input
            type="file"
            name=""
            id=""
          />
          <input
            type="radio"
            name=""
            id=""
          />
          <input
            type="range"
            name=""
            id=""
          />
        </form>

        <div>
          <p className="text-12">Lorem, ipsum.</p>
          <p className="text-14">Lorem, ipsum.</p>
          <p className="text-16">Lorem, ipsum.</p>
          <p className="text-18">Lorem, ipsum.</p>
          <p className="text-20">Lorem, ipsum.</p>
          <p className="text-22">Lorem, ipsum.</p>
          <p className="text-24">Lorem, ipsum.</p>
          <p className="text-26">Lorem, ipsum.</p>
          <p className="text-28">Lorem, ipsum.</p>
          <p className="text-30">Lorem, ipsum.</p>
        </div>
      </div>

      <SharedModal
        updateHandler={toggle}
        isActive={isActive}
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vero ea sit praesentium laborum dolorum, libero architecto dolor officiis aperiam rerum, maiores magni ullam itaque
            sapiente cumque! Expedita, optio veritatis?
          </div>
        }
      />
    </>
  )
}

export default HomePage
